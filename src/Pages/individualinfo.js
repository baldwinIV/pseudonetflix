import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Post from '../components/post'
import '../App.css';
import './individualinfo.css';

function Individualinfo() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const initMovie = async () => {
    const param = {
      "uid": sessionStorage.getItem("ID"),
    }
    const res = await axios.get('/api/user/postings', { params: param }, { withCredentials: true })
    console.log("~~~~~~~~~~~", res, "~~~~~~~~~~~");
    setPosts(res.data);
  }
  useEffect(() => {
    if (sessionStorage.getItem("Login") === 'false') {
      console.log("로그인으로 돌아감", sessionStorage.getItem("Login"))
      navigate('/')
    }
    initMovie();
  }, [navigate])
  return (
    <div className="App">
      <Header></Header>
      <div className="infocontainer">
        <div>your name is {sessionStorage.getItem("Name")}</div>
        <div>your birthday is {sessionStorage.getItem("Birth")}</div>
        <div>your Email is {sessionStorage.getItem("Email")}</div>

      </div>
      <div className='slogen'>You wrote these posts...</div>
      <div className='board'>
        {posts
          .map((value, index, array) => { //value array[index] index index array movies movies.filter.map // sorting
            return (
              <Post key={value.post_id} value={value} _index={index + 1}></Post>
            )
          })}
      </div>


    </div >
  );
}

export default Individualinfo;
