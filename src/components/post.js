import './post.css';
import React from 'react';

function Post({ value, _index }) {
    console.log(_index);
    return (
        <div className='post'>
            {_index} th past
            <div className="post_head">
            </div>
            <div className="post_img"
                style={{}}>
            </div>
            <div className="post_bottom">
                <div className="post_title">{value.post_title}</div>
                <div>{value.post_description}</div>
                <div className="defaultbutton bluebutton">HelloWorld</div>
            </div>
        </div >
    );
}

export default Post;
