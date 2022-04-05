import React from 'react';
import useReviews from '../../hooks/useReviews';
import ShowReview from '../ShowReview/ShowReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is review</h2>
            <div className='reviews'>
                {
                    reviews.map(review => <ShowReview
                        key={review.id}
                        review={review}
                    ></ShowReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;