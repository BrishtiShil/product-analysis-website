import React from 'react';
import './ShowReview.css';

const ShowReview = ({ review }) => {
    const { name, image, blog, ratings } = review;
    return (
        <div className='showReview'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{blog}</p>
            <strong>Ratings: {ratings}</strong>
        </div>
    );
};

export default ShowReview;