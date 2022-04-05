import React from 'react';
import './ShowHomeReview.css';

const ShowHomeReview = ({ review }) => {
    const { name, image, blog, ratings } = review;
    return (
        <div className='showHome'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{blog}</p>
            <strong>Ratings: {ratings}</strong>
        </div>
    );
};

export default ShowHomeReview;