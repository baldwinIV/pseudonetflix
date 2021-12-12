import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import imgA from "../../img/sampleimage.png";
import './reviewContainer.css';


function ReviewContainer({ value, movie }) {
    const Movietext = () => {
        if (movie !== 'default!@#') {
            const movieparsed = JSON.parse(movie);
            return (
                <div className='MovieTextContainer'>
                    <div MTtitle='MTcomponent'>About Movie</div>
                    <div className='MTcomponent'>Title:{movieparsed.movie_title}</div>
                    <div className='MTcomponent'>Director:{movieparsed.movie_director}</div>
                    <div className='MTcomponent'>Year:{movieparsed.movie_year}</div>
                </div>
            )
        } else {
            return (
                <div className='MovieTextContainer'>
                    <div MTtitle='MTcomponent'>About Movie</div>
                    <div className='MTcomponent'>Not quried yet</div>
                    <div className='MTcomponent'>Not quried yet</div>
                    <div className='MTcomponent'>Not quried yet</div>
                </div>
            )
        }
    }

    if (movie !== 'default!@#' || value.post_title !== undefined) {
        return (
            <div className='review' style={{}}>
                <Movietext></Movietext>
                <div className="review_head">
                </div>
                <img className="review_img" border='1px' src={imgA} alt={"No image of review"}
                />
                <div className="review_bottom">
                    <div className="review_title">{value.post_title}</div>
                    <div className="review_font">Review Content</div>
                    <div className="review_font">{value.post_description}</div>
                </div>
            </div >
        );
    } else {
        console.log("it means that movieInfo is default!@#");
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
