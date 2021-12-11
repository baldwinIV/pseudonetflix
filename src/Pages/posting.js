import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import '../App.css';
import './posting.css';

function Posting() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const [url, seturl] = useState('default!@#');
  const [title, settitle] = useState('default!@#');
  const [selected_movie, setselected_movie] = useState('default!@#');
  const [description, setdescription] = useState('default!@#');

  const init_movie = async () => {
    const res = await axios.get('/api/movie', { withCredentials: true })
    console.log(res);
    setMovies(res.data);
  }
  const handletitle = (e) => {
    settitle(e.target.value)
  }
  const handleurl = (e) => {
    seturl(e.target.value)
  }
  const handleselectedmovie = (e) => {
    console.log(e.target.value)
    setselected_movie(e.target.value)
  }
  const handledesc = (e) => {
    setdescription(e.target.value)
  }
  useEffect(() => {
    init_movie();

  }, [navigate])

  const onSubmit = async () => {
    console.log('submit session')
    if (url === "default!@#" || title === "default!@#" || selected_movie === "default!@#" || description === "default!@#") {
      alert("plz insert all information")
    }
    else if (url.length === 0 || title.length === 0 || selected_movie.length === 0 || description.length === 0) {
      alert("plz insert all information")
    } else {
      const parameterobject = {
        "post_imagepath": url,
        "post_description": description,
        "post_user_id": sessionStorage.getItem("ID"),
        "post_viewcount": 0,
        "post_recommendation": 0,
        "post_title": title,
        "post_movie_id": selected_movie
      }
      const res = await axios.post('/api/post/register', parameterobject, { withCredentials: true })
      console.log(res);
      alert("Post is Succesfully registered!")
      navigate('/');
    }
  }

  return (
    <div className="App form">
      <Header></Header>
      <div className="modal" id="modalID">
        <div className="modal_head">
          <div className="modal_title">Post your Review</div>
        </div>
        <div className="modal_body">
          <div className="modaltext">Review Title</div>
          <input className="modalinput" id="tasktitle" type="text" placeholder="Hello Title" onChange={handletitle}></input>
          <div class="modaltext">Image Url</div>
          <input class="modalinput" id="imageurl" type="text" placeholder="https:image.com" onChange={handleurl}></input>
          <div className="modaltext">Select movie that you want to review</div>
          <form>
            <select name="movie" onChange={handleselectedmovie} >
              <option value="none">=== Movie Selection ===</option>
              {movies.map((value, index, array) => { //value array[index] index index array movies movies.filter.map // sorting
                return (
                  <option key={value.movie_id} value={value.movie_id}>{value.movie_title}{value.movie_id}</option>
                )
              })}
            </select>
          </form>
          <div className="modaltext">Post Description</div>
          <textarea cols="50" rows="20" id="taskdescription" placeholder="Description" onChange={handledesc}></textarea>

        </div>
        <div className="modal_bottom">
          <div className="defaultButton" id="closebt">Close</div>
          <div className="nodrag defaultButton" onClick={onSubmit}>Register Post</div>
        </div>
      </div>

    </div >
  );
}

export default Posting;
