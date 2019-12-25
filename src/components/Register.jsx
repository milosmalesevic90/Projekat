import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { register } from '../utility/forum-services'

const Register =({setUser,history})=>{
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPW,setConfirmPW]=useState('')
    const [vadidPW,setValidPW]=useState(false)
    const [isSame,setIsSame]=useState(false)

    useEffect(()=>{
        function isValidPW(){
            if((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)){
                setValidPW(true)
            }
            else{
                setValidPW(false)
            }
        }
        
        isValidPW()
    },[password])

    useEffect(()=>{
        setIsSame(confirmPW===password)
    },[confirmPW,password])

    function handleSubmit(){
        if(vadidPW || !isSame)
        return
        register({name,surname,username,email,password})
        .then(data=>{
            if(data.success){
                console.log(data)
            }
        })
        setName('')
        setSurname('')
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPW('')
    }

    return(
        <form>
            <input type="text" placeholder="Name" value={name} required onInput={e=>{
                setName(e.target.value)
            }}/><br/>
            <input type="text" placeholder="Surname" value={surname} required onInput={e=>{
                setSurname(e.target.value)
            }}/><br/>
            <input type="text" placeholder="Username" value={username} required onInput={e=>{
                setUsername(e.target.value)
            }}/><br/>
            <input type="email" placeholder="Email" value={email} required onInput={e=>{
                setEmail(e.target.value)
            }}/><br/>
            <input type="password" placeholder="Password" value={password} required onInput={e=>{
                setPassword(e.target.value)
            }}/><br/>
            <input type="password" placeholder="Confirm Password" value={confirmPW} required onInput={e=>{
                setConfirmPW(e.target.value)
            }}/><br/>

            <input type="submit" value = "Register" onClick={e=>{e.preventDefault();handleSubmit()}}/>
        </form>
    )
}

export default Register