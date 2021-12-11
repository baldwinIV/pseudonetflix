import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './reviewContainer.css';


function ReviewContainer({ value, movie }) {


    if (movie !== 'default!@#' || value.post_title !== undefined) {
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
                    <div>{movie}</div>
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
