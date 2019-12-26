import React from 'react'
import { useState } from 'react'
import { newTopic } from '../utility/forum-services'
import { topicMessage } from '../utility/forum-services'


const NewTopic = ({user})=>{
    const[topic,setTopic]=useState('')
    const[message,setMessage]=useState('')

    function topicAdd(){
        newTopic(user.user_id,topic)
        .then(data=>{
            if(data.success){
                console.log(data)
                topicMessage(user.username,data.topic.topic_id,message)
            }
            
        }
        
        )
        setTopic('')
        setMessage('')
    }

    

    return(
        <>
        <h2>ADD TOPIC</h2>
        <form>
            <input type="text" placeholder="New Topic" value={topic} required onInput={e=>{
                setTopic(e.target.value)
            }}/>
            <br/>
            <input type="text" placeholder="First Message for Topic" value={message} required onInput={e=>{
                setMessage(e.target.value)
            }}/>
            <br/>
            <input type="submit" value="New Topic" onClick={(e) => {
                e.preventDefault()
                topicAdd()
            }} />


        </form>
        </>
    )
}

export default NewTopic