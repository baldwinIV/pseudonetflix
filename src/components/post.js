import './post.css';
import React from 'react';
import { useDebugValue } from 'react/cjs/react.production.min';

function Post({ value, _index }) {
    console.log(value.post_imagepath)
    const defaultpath = '../../img/default.png'
    return (
        <div className='post nodrag'>
            {_index} th post
            <div className="post_head">
            </div>
            <img className="post_img" width="100px" height="100px" border='1px' src={value.post_imagepath} alt={"No image of review"}
            />
            <div className="post_bottom">
                <div className="post_title">{value.post_title}</div>
            </div>
        </div >
    );
}

export default Post;
