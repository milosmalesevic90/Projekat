const POST = 'https://coetus.herokuapp.com/api/forum/users'
const GET = 'https://coetus.herokuapp.com/api/forum/users'
const PUT = 'https://coetus.herokuapp.com/api/forum/users'
const api = 'https://coetus.herokuapp.com/api/forum/message/'



function login(user){
    let res = fetch(`${POST}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}
function register(user){
    return fetch(`${PUT}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}

function allTopic(){
    return fetch(`https://coetus.herokuapp.com/api/forum/topics`)
            .then(res => res.json())
}

function userInfo(){
    return fetch(`https://coetus.herokuapp.com/api/forum/users/:user_id`)
            .then(res => res.json())
}

function newTopic(user_id,title){
    let res = fetch(`https://coetus.herokuapp.com/api/forum/topics`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify({user_id,title})
    }).then(res => res.json())
    return res
}

function topicMessage(username,topic_id,message){
    let res = fetch(`https://coetus.herokuapp.com/api/forum/message`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify({username,topic_id,message})
    }).then(res => res.json())
    return res
}
function getMsnOnTpc(id){
    return fetch(`${api}${id}`).then(res=>res.json())
}



export {
    login,
    register,
    allTopic,
    userInfo,
    newTopic,
    topicMessage,
    getMsnOnTpc
   
}