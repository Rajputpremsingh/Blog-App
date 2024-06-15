import { Alert, Button, Modal, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { updateStart,updateFailure,updateSuccess,deleteUserFailure,deleteUserStart,deleteUserSuccess,signOutSuccess } from '../redux/user/userSlice'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
const DashProfile = () => {
    const dispatch = useDispatch()
    const {currentUser,error} = useSelector(state => state.user)  
    const [imageFile,setImageFile] = useState(null)
    const [imageFileUrl,setImageFileUrl] = useState(null)
    const [imageFileUploadingProgress,setImageFileUploadingProgress] = useState(null)
    const [imageFileUploadingError,setImageFileUploadingError] = useState(null)
    const [imageFileUploading,setImageFileUploading] = useState(false)
    const filePickerRef = useRef()
    const [formData,setFormData] = useState({})
    const [updateUserSuccess,setUpdateUserSuccess] = useState(null)
    const [updateUserError,setUpdateUserError] = useState(null)
    const [showModal,setShowModal] = useState(false)
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if(file){
            setImageFile(file)
            setImageFileUrl(URL.createObjectURL(file))
        }

    }
    useEffect(()=>{
        if(imageFile){
            uploadImage()
        }
    },[imageFile])

    const uploadImage = async ()=>{
        setImageFileUploading(true)
        setUpdateUserSuccess(null)
        setImageFileUploadingError(null)
        const storage = getStorage(app)
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage,fileName)
        const uploadTask = uploadBytesResumable(storageRef,imageFile)
        uploadTask.on(
            'state_changed',
            (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
                setImageFileUploadingProgress(progress.toFixed(0))
            },
            (error)=>{
                setImageFileUploadingError('Could not upload image (File must be less than 2MB)')
                setImageFileUploadingProgress(null)
                setImageFile(null)
                setImageFileUrl(null)
                setImageFileUploading(false)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    setImageFileUrl(downloadURL)
                    setFormData({...formData,profilePicture:downloadURL})
                    setImageFileUploading(false)
                })
            }
        )
    }
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        setUpdateUserError(null)
        setUpdateUserSuccess(null)
        e.preventDefault()
        if(Object.keys(formData).length === 0){
            setUpdateUserError("Nothing to Update")
            return
        }
        if(imageFileUploading){
            setUpdateUserError("Image is uploading..")
            return;
        }
        try {
            dispatch(updateStart())
            const response = await fetch(`/api/user/update/${currentUser._id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(formData)
            })
            const data = await response.json()
            if(!response.ok){
                dispatch(updateFailure(data.message))
                setUpdateUserError(data.message)
            }
            else{
                setUpdateUserSuccess("Profile Updated Successfully")
                dispatch(updateSuccess(data))
                setFormData({})
            }
        } catch (error) {
            setUpdateUserError(data.message)
            dispatch(updateFailure(error.message))
        }
    }
    const handleDeleteUser = async ()=>{
        setShowModal(false)
        try {
            dispatch(deleteUserStart())
            const res = await fetch(`/api/user/delete/${currentUser._id}`,{
                method : 'DELETE',
            })
            const result = await res.json()
            if(!res.ok){
                dispatch(deleteUserFailure(result.message))
            }
            else{
                dispatch(deleteUserSuccess(result))
            }

        } catch (error) {
            dispatch(deleteUserFailure(error.message))
        }
    }

    const handleSignOut =async ()=>{
        try {
            const res = await fetch(`/api/user/signout/`,{
                method : 'POST'
            })
            const data = await res.json()
            if(!res.ok){
                console.log(data.message);
            }else{
                dispatch(signOutSuccess())
            }
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="file" hidden accept='image/*'onChange={handleImageChange} ref={filePickerRef} />
            <div className='relative w-32 h-32 self-center shadow-md  rounded-full' onClick={()=>{
                filePickerRef.current.click()
            }}>
                {imageFileUploadingProgress && (<CircularProgressbar value={imageFileUploadingProgress || 0} text={`${imageFileUploadingProgress}%`} strokeWidth={5} styles={{root:
                    {
                        width:'100%',
                        height:'100%',
                        position:'absolute',
                        top:'0',
                        left : '0'
                    },
                    path : {
                        stroke:`rgba(62,152,199,${imageFileUploadingProgress/100})`
                    }
                    }} />)}
                <img src={imageFileUrl || currentUser?.profilePicture} alt="Profile" className={`rounded-full w-full h-full border-8 object-cover border-[lioghtgray] cursor-pointer ${imageFileUploadingProgress && imageFileUploadingProgress<100 && 'opacity-60'}`} />
            </div>
            { imageFileUploadingError &&  
            (<Alert color='failure'>
                {imageFileUploadingError}
            </Alert>)
            }
            <TextInput typt='text' id='username' placeholder='Username' defaultValue={currentUser?.username} onChange={handleChange} />
            <TextInput typt='email' id='email' placeholder='Email' defaultValue={currentUser?.email} onChange={handleChange} />
            <TextInput typt='text' id='username' placeholder='********' onChange={handleChange} />
            <Button type="submit" gradientDuoTone='purpleToBlue' outline>
                Update
            </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
            <span onClick={()=>setShowModal(true)} className='cursor-pointer'>Delete Account</span>
            <span className='cursor-pointer' onClick={handleSignOut}>Sign Out</span>
        </div>
        {updateUserSuccess && (
            <Alert color='success' className='mt-5'>
                {updateUserSuccess}
            </Alert>
        )}
        {updateUserError && (
            <Alert color='failure' className='mt-5'>
                {updateUserError}
            </Alert>
        )}
        {error && (
            <Alert color='failure' className='mt-5'>
                {error}
            </Alert>
        )}
        <Modal show={showModal} onClose={()=>setShowModal(false)} popup size='md'>
            <Modal.Header  />
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
                    <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>Are You sure You want to Delete Your Account ? </h3>
                    <div className='flex justify-center gap-4'>
                        <Button color="failure" onClick={handleDeleteUser}>Yes I'm Sure</Button>
                        <Button color="success" onClick={()=>setShowModal(false)}>No</Button>
                    </div>
                </div>


            </Modal.Body>
        </Modal>
    </div>
  )
}

export default DashProfile