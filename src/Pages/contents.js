import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Post from '../components/post'
import ReviewContainer from '../components/contents/reviewContainer'
import '../App.css';
import './contents.css';

function Contents() {
  const [posts, setPosts] = useState([]);
  const [postWatching, setpostWatching] = useState({});
  const [movieInfo, setMovieinfo] = useState('default!@#');
  const [movies, setMovies] = useState([]);
  const [selected_movie, setselected_movie] = useState('default!@#');
  const handleselectedmovie = (e) => {
    console.log(e.target.value)
    setselected_movie(e.target.value)
    initMovieinfo();
  }
  const navigate = useNavigate();

  const initMovie = async () => {
    const res = await axios.get('/api/movie', { withCredentials: true })
    // console.log(res);
    setMovies(res.data);
  }

  const initPosts = async () => {
    const param = {
      "movie_id": selected_movie,
    }
    const res = await axios.get('/api/movie/postings', { params: param }, { withCredentials: true })
    console.log("~~~~~~~~~~~", res, "~~~~~~~~~~~");
    setPosts(res.data);
  }

  const initMovieinfo = async () => {
    console.log("Hel")
    const param = {
      "movie_id": selected_movie,
    }
    const res = await axios.get('/api/movie/find', { params: param }, { withCredentials: true })
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~",res.data);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~",res.data.movie_title);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~",res.data.movie_year);
    const object = {
      movie_year : res.data.movie_year,
      movie_title : res.data.movie_title,
      movie_director : res.data.movie_director,
      movie_description : res.data.movie_description,
    }
    setMovieinfo(JSON.stringify(object));
    // setMovieinfo(JSON.stringify(object));
  }

  useEffect(() => {
    if (sessionStorage.getItem("Login") === 'false') {
      console.log("로그인으로 돌아감", sessionStorage.getItem("Login"))
      navigate('/')
    }
    if (selected_movie !== 'default!@#') {
      // console.log(selected_movie)
      initPosts();
    }
    initMovie();
  }, [navigate, selected_movie])



  const onClickPost = (_value) => {
    initMovieinfo();
    setpostWatching(_value)
  }

  return (
    <div className="defaultlayout">
      <Header></Header>
      <div>Watch the other guy's review</div>
      <form style={{ marginTop: "50px" }}>
        <select name="movie" onChange={handleselectedmovie} >
          <option value="none">=== Movie Selection ===</option>
          {movies.map((value, index, array) => { //value array[index] index index array movies movies.filter.map // sorting
            return (
              <option key={value.movie_id} value={value.movie_id}>{value.movie_title}{value.movie_id}</option>
            )
          })}
        </select>
      </form>
      <div className='contentsContainer'>
        <div className='postboard'>
          {posts
            .map((value, index, array) => { //value array[index] index index array movies movies.filter.map // sorting
              return (
                <div onClick={() => { onClickPost(value) }}>
                  <Post className="nodrag" key={value.post_id} value={value}  _index={index + 1} ></Post>
                </div>
              )
            })}
        </div>
        <ReviewContainer value={postWatching} movie = {movieInfo}></ReviewContainer>
      </div>



    </div >
  );
}

export default Contents;
