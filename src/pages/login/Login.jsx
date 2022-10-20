import './login.css'
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();

    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            });

        } catch (error) {
            console.log("some failure occured");
            dispatch({ type: "LOGIN_FAILURE" });

        }
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label >Username</label>
                <input className='loginInput' type="text" placeholder='Enter your Username...'
                    ref={userRef} />
                <label >Password</label>
                <input className='loginInput' type="password" placeholder='Enter your password...'
                    ref={passwordRef} />
                <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
                <button className="loginRegisterButton"><Link to='/register' className='link' >Register</Link></button>
            </form>
        </div>
    )
}
