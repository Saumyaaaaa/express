import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogout = () => {
    localStorage.removeItem("token")
    let navigate=useNavigate()
    useEffect(()=>{
        navigate("/")
    },[])
  return (
    <div>
      AdminLogout
    </div>
  )
}

export default AdminLogout
