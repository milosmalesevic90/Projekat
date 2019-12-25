import React from 'react'
import { withRouter } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { userInfo } from '../utility/forum-services'


const Profile = ({user}) => {
    //const[user,setUser]=useState([])
//
    //useEffect(()=>{
    //    userInfo()
    //    .then(data=>{
    //        setUser(data.user)
    //        console.log(data)
    //    })
    //},[])
    return (
        <div className='profilediv'>
            <p><strong>Name     </strong>: {user.name}</p>
            <p><strong>Surname  </strong>: {user.surname}</p>
            <p><strong>Username </strong>: {user.username}</p>
            <p><strong>E-mail   </strong>: {user.email}</p>
            <img src={user.picture ? user.picture:''} alt="user-avatar"/>
        </div>

    )
}

export default Profile 