import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Post from '../components/post'
import Banner from '../components/curation/banner'
import '../App.css';
import './curation.css';

function Curation() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (sessionStorage.getItem("Login") === 'false') {
      console.log("로그인으로 돌아감", sessionStorage.getItem("Login"))
      navigate('/')
    }
  }, [navigate])
  return (
    <div className="App">
      <Header></Header>
      <Banner/>


    </div >
  );
}

export default Curation;
