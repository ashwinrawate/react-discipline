import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  //Destructuring
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = restaurant;
  return (
    <div className="restaurantCard">
      <img className="cardImage" src={`${CDN_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <div className="ratingsMinutes">
        <h4>⭐{avgRating}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
      <h5>{cuisines?.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;
