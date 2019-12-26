import React, { useEffect } from 'react';
import { allTopic,cleanDate } from '../utility/forum-services';
import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';



const TopicList=({history})=>{
    const[topics,setTopics]=useState([])
    function time(s) {
        return new Date(s * 1e3).toLocaleTimeString().slice(-13, -5);

        
    }
    

    useEffect(()=>{
        allTopic()
        .then(data=>{
            setTopics(data.topics)
        })
    },[]) 
    
    return (
        <main className='topiclist'>
        <h3>Topics List</h3>
        <ol className="gradient-list">
    {topics.map(topic => <li onClick = {()=> history.push(`/topic/${topic.topic_id}`)} >{topic.title.toString()} {new Date(topic.timestamp).toLocaleTimeString("en-US")}</li> )}

        </ol>
        </main>
    )
}

export default withRouter(TopicList)