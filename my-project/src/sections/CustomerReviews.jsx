import {reviews} from '../constants/index'
import ReviewCard from '../components/ReviewCard';
const CustomerReviews = () => {
  return (
<section className="max-container">
<h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 max-lg:flex-col items-center gap-14">
     {reviews.map((review)=>(
      <ReviewCard
      key={review.customerName}
      imgURL={review.imgURL}
      customerName={review.customerName}
      rating={review.rating}
      feedback={review.feedback} />
     ))}
      </div>


</section>  
);
};

export default CustomerReviews;