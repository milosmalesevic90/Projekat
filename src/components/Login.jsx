import React from 'react';
import { useState } from 'react';
import { login } from '../utility/forum-services';
import { withRouter } from 'react-router-dom';




const Login = ({setUser,history})=>{
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')

    function handleSubmit(){
        login({username,password}).then(data=>{
            if(data.success){
                setUser(data.user)
               history.push('/')
              console.log(data)
               
            }
            else console.log('Nije ulogovan')
        })
        setPassword('')
        setUsername('')
       
    }
    return(
        <form>
            <input type ="username" value={username} placeholder="Username" required onInput={e=>{
                setUsername(e.target.value);
            }}/><br/>
            <input type="password" value={password} placeholder="Password" required onInput={e=>{
                setPassword(e.target.value)
            }}/><br/>
            <input type="submit" value="Login" onClick={(e)=>{
                e.preventDefault()

                handleSubmit()
                
            }}/>
        </form>

        
    )
}

export default withRouter(Login) 