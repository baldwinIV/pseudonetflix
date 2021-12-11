import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Post from '../components/post'
import '../App.css';
import './curation.css';

function Curation() {
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
    initMovie();
  }, [navigate])
  return (
    <div className="App">
      <Header></Header>
      <div>your name is {sessionStorage.getItem("Name")}</div>
      <div>your birthday is {sessionStorage.getItem("Birth")}</div>
      <div>your Email is {sessionStorage.getItem("Email")}</div>
      <div> your post is like this</div>
      <div className='board'>
        {posts
          .map((value, index, array) => { //value array[index] index index array movies movies.filter.map // sorting
            return (
              <Post key = {value.post_id}value={value} _index={index + 1}></Post>
            )
          })}
      </div>


    </div >
  );
}

export default Curation;
