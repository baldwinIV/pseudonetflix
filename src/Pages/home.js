import '../App.css';
import './home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import { useNavigate } from "react-router-dom";
import HomeComponent from '../components/home/HomeComponent';

function Home() {

  const navigate = useNavigate();

  const onClickDelete = async () => {
    console.log('delete seccsion')
    const res = await axios.get('/api/deleteSession', { withCredentials: true })
    console.log(res);
    if (res.data === "delete_complete") { //it means that you are success
      console.log("request:", res.data);
      sessionStorage.setItem("Login", false);
      navigate('/')
    } else {
      alert("incorrect Email or Password!")
    }
  }


  useEffect(() => {
    console.log("asdasdasd", sessionStorage.getItem("Login"))
    if (sessionStorage.getItem("Login") === 'false') {
      console.log("로그인으로 돌아감", sessionStorage.getItem("Login"))
      navigate('/')
    }
  }, [navigate])

  return (
    <div className="HomeLayout">
      <Header></Header>
      <div className="ColContainer">
        <div className="RowContainer">
          <HomeComponent _path={"/Curation"} _width={300} _height={150} name={"Curation"}></HomeComponent>
          <HomeComponent _path={"/Posting"} _width={300} _height={150} name={"Posting"}></HomeComponent>
        </div>
        <div className="RowContainer">
          <HomeComponent _path={"/contents"} _width={300} _height={150} name={"Contents"}></HomeComponent>
          <HomeComponent _path={"/Individualinfo"} _width={300} _height={150} name={"Individualinfo"}></HomeComponent>
        </div>
      </div>
      <button type='button' className='defaultButton' onClick={onClickDelete}>Logout</button>
    </div >
  );
}

export default Home;
