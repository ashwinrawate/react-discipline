import { createRoot } from "react-dom/client";
import { resList } from "./data";

/*
# Components planned for app
  1. HeaderComponent
      i.  Logo Component
      ii. Nav item Component
  2. BodyComponent  
      i.  Search Component
      ii. CardContainer
          a. Restaurent Conatiner
              i. Restaurant card
                  - Image of Restaurant
                  - Name of Restaurant
                  - Star rating
                  - Cusines
  3. FooterComponent
      i.  Copyright
      ii. Links
      iii.Address
      iv. Contact
      
  4. AppLayout
      i.  HeaderComponent
      ii. BodyComponent 
      iii.FooterComponent
*/
const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3dZactmUkCTaFpS_2xpy6UP8PIpIVPJjVA&s"
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurantCard">
      <img
        className="cardImage"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
      ></img>
      <h3>{restaurant.name}</h3>
      <div className="ratingsMinutes">
        <h4>⭐{restaurant.avgRating}</h4>
        <h4>{restaurant.sla.slaString}</h4>
      </div>
      <h5>{restaurant.cuisines.join(", ")}</h5>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.id} restaurant={res}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

const FooterComponent = () => <h1>I am a Footer Component</h1>;

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
