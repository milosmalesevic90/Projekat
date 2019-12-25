import React, { useEffect } from 'react';
import { allTopic,cleanDate } from '../utility/forum-services';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const TopicList=()=>{
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
        <h2>Topics List</h2>
        <ol className="gradient-list">
    {topics.map(topic => <li><Link to='/topic'>{topic.title}       {new Date(topic.timestamp).toLocaleTimeString("en-US")}</Link></li> )}

        </ol>
        </main>
    )
}

export default TopicList