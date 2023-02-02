import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    // const [toggleEye, setToggleEye] = useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleLogin = (e) => {
        e.preventDefault();

        try {
            signInWithEmailAndPassword(auth, inputs.email, inputs.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    navigate("/")
                }
                );

        } catch (error) { }
    };

    return (
        <div className="login">
            <form>
                <h2>Đăng nhập</h2>
                <div className="formInput">
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} required />

                </div>
                <div className="formInput">
                    <input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={handleChange} required />
                    <div className="eyeIcon">
                        {/* {toggleEye ? <Visibility/> : <VisibilityOff/>} */}
                    </div>
                </div>
                <button type="submit" onClick={handleLogin}>Đăng nhập</button>

                <div className="formLink">
                    <span>Bạn chưa có tài khoản? </span>
                    <Link to="/register" className="formSignup" style={{ textDecoration: "none" }}>{" "}Đăng ký</Link>
                </div>

                <div className="line"></div>
                <div className="media-option">
                    <Link to="#" className='facebook' style={{ textDecoration: "none" }}>
                        <img src="/assets/facebook.svg" alt="" className="facebookIcon" />
                        <span>Đăng nhập với Facebook</span>
                    </Link>
                </div>
                <div className="media-option">
                    <Link to="#" className='facebook google' style={{ textDecoration: "none" }}>
                        <img src="/assets/google.svg" alt="" className="googleImg" />
                        <span>Đăng nhập với Google</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login
