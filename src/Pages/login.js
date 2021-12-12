import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Header } from '../components'
import HomeComponent from '../components/home/HomeComponent';
// import { LoginContext } from '../Contexts'

function Login() {
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerBY, setRegisterBY] = useState('')
  const [registerPW, setRegisterPW] = useState('')
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const [isloggined, setloggined] = useState('false')
  const [isregister, setregister] = useState('false')
  const navigate = useNavigate();
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const handleRegisterName = (e) => {
    setRegisterName(e.target.value)
  }
  const handleRegisterEmail = (e) => {
    setRegisterEmail(e.target.value)
  }
  const handleRegisterPW = (e) => {
    setRegisterPW(e.target.value)
  }
  const handleRegisterBY = (e) => {
    setRegisterBY(e.target.value)
  }
  const onClickLogin = () => {
    if (inputId.length === 0 || inputPw.length === 0) {
      alert("plz insert all information")
    } else {
      console.log('click login')
      const params = {
        "email": inputId,
        "password": inputPw,
      }
      console.log(params)
      axios.get('/api/addSession', { params })
        .then(
          res => {
            if (res.data !== "fail") { //it means that you are success
              console.log("request:", res.data);
              sessionStorage.setItem("Email", res.data.user_email)
              sessionStorage.setItem("Login", true)
              sessionStorage.setItem("ID", res.data.user_id)
              setloggined('true');
              sessionStorage.setItem("Birth", res.data.user_birthyear)
              sessionStorage.setItem("Name", res.data.user_name)
            } else {
              alert("incorrect Email or Password!")
            }
          }
        )
        .catch()
    }


  }
  const onClickTest = async () => {
    console.log('test seccsion')
    const res = await axios.get('/api/confirmSession', { withCredentials: true })
    console.log("request:", res.data);
    // navigate('/home')
  }

  const onClickDelete = async () => {
    console.log('delete seccsion')
    const res = await axios.get('/api/deleteSession', { withCredentials: true })
    sessionStorage.clear()
    console.log(res);
  }
  const onClickSubmit = async () => {
    if (registerEmail.length === 0 || registerName.length === 0 || registerBY.length === 0 || registerPW.length === 0) {
      alert("plz insert all information")
    } else {
      console.log('submit session')
      const tosend = {
        UserEmail: registerEmail,
        UserName: registerName,
        UserBirthyear: registerBY,
        UserPassword: registerPW,
      }
      const res = await axios.post('/api/register', tosend, { withCredentials: true })
      alert("complete!")
      if (isregister === 'true') {
        setregister('false');
      } else {
        setregister('true');
      }

      console.log(res);
    }

  }
  const onClickRegister = () => {
    if (isregister === 'true') {
      setregister('false');
    } else {
      setregister('true');
    }
  }

  useEffect(() => {
    console.log("asdasdasd", sessionStorage.getItem("Login"))
    if (sessionStorage.getItem("Login") === 'true') {
      console.log("들어가야함", sessionStorage.getItem("Login"))
      navigate('/home')
    }
  }, [navigate, isloggined])



  if (isregister === 'false') {
    return (
      <div className='loginLayout'>
        <Header></Header>
        <div className='slogentext1'>PseudoNetflix - want to be real netflix</div>
        <div className='slogentext2'>Post your Review! Searching For Fantastic Movies!</div>
        <div className='loginform'>
          <h2>Login</h2>
          <div className='loginRow'>
            <label htmlFor='input_Email'>Email</label>
            <input type='text' name='input_Email' value={inputId} onChange={handleInputId} />
          </div>
          <div className='loginRow'>
            <label htmlFor='input_pw'>PW</label>
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
          </div>
          <div style={{ marginBottom: "10px" }}></div>
          <div>
            <button className="defaultButton" type='button' onClick={onClickLogin}>Login</button>
            <button className="defaultButton" type='button' onClick={onClickTest}>TestSesscion</button>
            <button className="defaultButton" type='button' onClick={onClickDelete}>Sessiondelete</button>
            <button className="defaultButton" type='button' onClick={onClickRegister}>to Register</button>
          </div>
        </div>
      </div>
    )
  } else {
    //name email sex birthyear password
    return (
      <div className='loginLayout'>
        <Header></Header>
        <div className='slogentext1'>PseudoNetflix - want to be real netflix</div>
        <div className='slogentext2'>Post your Review! Searching For Fantastic Movies!</div>
        <div className='loginform'>
          <h2>Register</h2>
          <div className='registerRow'>
            <label htmlFor='input_name'>Name : </label>
            <input type='text' name='register_name' value={registerName} onChange={handleRegisterName} />
          </div>
          <div className='registerRow'>
            <label htmlFor='input_email'>Email : </label>
            <input type='text' name='register_email' value={registerEmail} onChange={handleRegisterEmail} />
          </div>
          <div className='registerRow'>
            <label htmlFor='input_pw'>PW : </label>
            <input type='password' name='register_pw' value={registerPW} onChange={handleRegisterPW} />
          </div>
          <div className='registerRow'>
            <label htmlFor='input_birthyear'>birthyear : </label>
            <input type='text' name='register_birthyear' value={registerBY} onChange={handleRegisterBY} />
          </div>
          <div style={{ marginBottom: "10px" }}></div>
          <div>
            <button className="defaultButton" type='button' onClick={onClickSubmit}>Submit Register</button>
            <button className="defaultButton" type='button' onClick={onClickRegister}>to Login</button>
          </div>
        </div>

      </div>
    )
  }

}

export default Login;
