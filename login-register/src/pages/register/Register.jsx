import React, { useState } from 'react';
import FormInput from '../../components/formInput/FormInput';
import "./register.scss";
import { Link, useNavigate } from "react-router-dom"
import { auth } from '../../firebase';
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 const navigate = useNavigate()
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Tên người dùng",
      errorMessage: "Tên người dùng nên từ 3-16 ký tự và không bao gồm ký tự đặc biệt",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Địa chỉ email không hợp lệ",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Mật khẩu",
      errorMessage: "Mật khẩu nên từ 8-20 ký tự và bao gồm tối thiểu 1 chữ cái, 1 số, 1 ký tự đặc biệt",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])([A-Za-z0-9!@#$%^&*()_+]{8,20}$)`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Xác nhận mật khẩu",
      errorMessage: "Mật khẩu không khớp",
      pattern: inputValues.password,
      required: true,
    },
  ];
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();


    try {
      createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: inputValues.username, 
          })
        });
        navigate("/login");
    } catch (error) {}
  };
  // console.log(inputValues);
  return (
    <div className="register">
      <form>
        <h2>Đăng ký</h2>
        {inputs.map((input) => (
          <FormInput key={input.id}
            {...input}
            value={inputValues[input.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" onClick={handleRegister}>Đăng ký</button>

        <div className="formLink">
          <span>Bạn đã có tài khoản? </span>
          <Link to="/login" className="formSignup" style={{ textDecoration: "none" }}>{" "}Đăng nhập</Link>
        </div>

        <div className="line"></div>
        <div className="media-option">
          <Link to="#" className='facebook' style={{ textDecoration: "none" }}>
            {/* <FacebookRounded className="facebookIcon"/> */}
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

export default Register
