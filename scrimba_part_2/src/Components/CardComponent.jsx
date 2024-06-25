import React from 'react'
import picture from '../assets/katie-zaferes.png'
import starPicture from '../assets/star.png'

export function CardComponent(){
    return (
        <div class="card">
            <img src={picture} alt="picture" className="card--image" />
            <div className="card--stats">
                <img src={starPicture} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    );
}