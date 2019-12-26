import React from "react"
import { Link, withRouter } from "react-router-dom"


const Header = ({ logedIn, setUser, history, user }) => {
    if (logedIn) {
        return (
            <header>
                <nav>
                <h1><Link to='/'>HOME</Link></h1>
                    <hr />
                    <div className='nav-item'>
                        <Link className='profil' to='/profile'>Welcome : {user.username}</Link><br/>
                        <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>LogOut</button></Link>
                        <Link to='/newtopic'><button className='header-btn'>New Topic</button></Link>
                    </div>
                </nav>
            </header>
        )
    }
    else {
        return (
            <header className='header'>
                <nav>
                <Link to='/'>HOME</Link>
                    <hr />
                    <div className='nav-items'>
                        <Link to='/register'><button className='header-btn'>Register</button></Link>
                        <Link to='/login'><button className='header-btn'>Login</button></Link>
                        
                    </div>
                </nav>
            </header>
        )
    }

}

export default withRouter(Header)