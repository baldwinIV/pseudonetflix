import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  const onClickLogin = () => {
    console.log('click login')
    const params = {
      "email": inputId,
      "password" : inputPw,
    }
    console.log(params)
    axios.get('/api/addSession', { params })
      .then(
        res => console.log(res),
      )
      .catch()
     
  }
  const onClickTest = () => {
    console.log('test seccsion')
    axios.get('/api/confirmSession')
      .then(res => console.log(res))
      .catch()
  }
  const onClickDelete = () => {
    console.log('delete seccsion')
    axios.get('/api/deleteSession')
      .then(res => console.log(res))
      .catch()
  }
  useEffect(() => {
     //true/false로 확인하고, 로그인된 세션이면 바로 고고씽
  }, [])
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor='input_id'>Email : </label>
        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor='input_pw'>PW : </label>
        <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
      </div>
      <div>
        <button type='button' onClick={onClickLogin}>Login</button>
        <button type='button' onClick={onClickTest}>TestSesscion</button>
        <button type='button' onClick={onClickDelete}>delete</button>
      </div>
    </div>
  )
}

export default Login;
