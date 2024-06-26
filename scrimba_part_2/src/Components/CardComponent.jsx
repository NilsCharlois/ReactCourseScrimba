import React from 'react'

export function CardComponent(props){
    console.log(props)
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="picture" className="card--image" />
            <div className="card--stats">
                <img src='../images/star.png' className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
}