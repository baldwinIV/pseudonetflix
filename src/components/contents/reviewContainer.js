import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './reviewContainer.css';


function ReviewContainer({ value,movie }) {
    // console.log("value", value.post_movie_id);
    
    // console.log("value", movieinfo);
    
    if (movie !== 'default!@#' || value.post_title !== undefined) {
        const movieinfo = JSON.parse(movie)
        return (
            <div className='review' style={{}}>

                <div className="review_head">
                </div>
                <div className="review_img"
                    style={{}}>
                </div>
                <div className="review_bottom">
                    <div className="review_title">{value.post_title}</div>
                    <div>{value.post_description}</div>
                    <div>{movieinfo.movie_title}</div>
                </div>
            </div >
        );
    } else {
        console.log("else");
        return (
            <div className='review' style={{}}>

                <div className="review_head">
                </div>
                <div className="review_img"
                    style={{}}>
                </div>
                <div className="review_bottom">
                    not selected yet
                </div>
            </div >)
    }

}

export default ReviewContainer;
