import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({})
    const [errorMessage,setErrorMessage] = useState(null)
    const [loading,setLoading] = useState(null)
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
        console.log(formData);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!formData.email || !formData.password){
            return setErrorMessage("Please Fill out all the fields")
        }
        try {
            setLoading(true)
            setErrorMessage(null)
            const res = await fetch('/api/auth/signin',{
                method:"POST",
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            });
            const data = await res.json();
            if(data.success === false){
                setErrorMessage(data.message)
            }
            setLoading(false)
            if(res.ok){
                navigate('/dashboard')
            }
        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false)
        }
    }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl m-auto flex-col gap-5 md:flex-row">
        {/* Left side Div */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Kajal's{" "}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            quisquam hic impedit nisi quod veniam maiores fugit qui magnam
            alias?
          </p>
        </div>
        {/* Right side Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Email"></Label>
              <TextInput type="email" placeholder="Email" id="email" onChange={handleChange}/>
            </div>
            <div className="">
              <Label value="Password"></Label>
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {loading ? <><Spinner size="sm" /><span className="pl-3">Loading...</span></> : "Sign-In"}
            </Button>
          </form>
          <div className=" flex gap-2 mt-5">
            <span>Don't have an Account ? </span>
            <Link to='/sign-up' className="text-blue-500"> Sign-up</Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
                {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};


export default SignIn;
