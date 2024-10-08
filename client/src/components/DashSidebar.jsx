import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state)=>state.user)

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
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    tabFromUrl && setTab(tabFromUrl);
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
                active = {tab==='profile'}
                icon={HiUser}
                label={currentUser?.isAdmin ? "Admin" : "User"}
                labelColor="dark"
                className="cursor-pointer"
                as='div'
            >
                Profile
            </Sidebar.Item>
          </Link>
        {currentUser?.isAdmin && 
        <Link to='/dashboard?tab=posts'>
          <Sidebar.Item active={tab==='posts'} icon={HiDocumentText} labelColor='dark' as='div'>
            Posts
          </Sidebar.Item>
        </Link>
        }
        {currentUser?.isAdmin && 
        <Link to='/dashboard?tab=users'>
          <Sidebar.Item active={tab==='users'} icon={HiOutlineUserGroup} labelColor='dark' as='div'>
            Users
          </Sidebar.Item>
        </Link>
        }
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiArrowSmRight} onClick = {handleSignOut} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
