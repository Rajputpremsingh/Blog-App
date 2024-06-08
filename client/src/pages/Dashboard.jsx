import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

const Dashboard = () => {
  const location = useLocation()
  console.log("Location : ",location);
  const [tab,setTab] = useState("")
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    tabFromUrl && setTab(tabFromUrl);
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {(tab=='profile') && <DashProfile />}
      {/* Profile */}
    </div>
  )
}

export default Dashboard