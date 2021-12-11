import './HomeComponent.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function HomeComponent({ name, _width, _height, _path }) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(_path)
    }
    return (
        <div onClick={onClick} className='layout nodrag' style={{ width: _width, height: _height }}>
            {name}
        </div>
    );
}

export default HomeComponent;
