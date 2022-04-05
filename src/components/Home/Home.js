import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import ShowHomeReview from '../SowHomeReview/ShowHomeReview';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section>
            <div style={{ display: "flex" }}>
                <div>
                    <h1>Choose your watch</h1>
                    <h1 style={{ color: "blue" }}>Set your time</h1>
                    <p style={{ sixe: "bold" }}>WatchTime has one of the best watch test selection worldwide.A watch is something personal. Everyone has their own taste in design and style. Therefore, we do not want to say what a good or bad watch is, but what the signs of a quality watch are in general. And how these signs are easily identifiable.</p>
                </div>
                <div>
                    <img src="/logo.png" alt="" />
                </div>
            </div>
            <h1>Customer Reviews</h1>
            <div className='homeShow'>
                {
                    reviews.slice(0, 3).map(review => <ShowHomeReview
                        key={review.id}
                        review={review}
                    ></ShowHomeReview>)
                }
            </div>
        </section>
    );
};

export default Home;