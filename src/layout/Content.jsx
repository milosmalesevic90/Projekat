import React from 'react'
import {Switch,Route, Router} from 'react-router-dom'
import Profile from '../components/Profile'
import Login from '../components/Login'
import TopicList from '../components/TopicList'
import NewTopic from '../components/NewTopic'
import Register from '../components/Register'
import Topic from '../components/Topic'







const Content =({setUser,user,})=>{

    return(
        <main className='main'>
         
               <Switch>
                   <Route exact path='/' component={TopicList}/>
                   <Route path='/newtopic' component={()=><NewTopic user={user}/> }/>
                   <Route path='/register'component={(props)=> <Register setUser={setUser}{...props}/>}/>
                   <Route path='/login' component={(props) => <Login setUser={setUser} {...props}/>} />
                   <Route path='/profile' component={() => <Profile  user={user}/>} />
                   
                   <Route path='/topic/:topic_id' component={(props)=><Topic user={user} {...props}/>}/>
                   
               </Switch>
          

            
        </main>
    )
}
export default Content