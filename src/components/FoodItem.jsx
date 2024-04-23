import { CDN_URL } from '../Utils/constants';

const FoodItem = ({ food }) => {
  return (
    <div className='keen-slider__slide w-full h-full'>
      <img
        src={CDN_URL + food?.imageId}
        className='w-full pointer-events-none'
        alt=''
      />
    </div>
  );
};
export default FoodItem;
