import { createRoot } from "react-dom/client";

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

const RestaurantCard = () => {
  return (
    <div className="restaurantCard">
      <img
        className="cardImage"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG"
      ></img>
      <h3>The Belgian Waffle Co.</h3>
      <div className="ratingsMinutes">
        <h4>⭐ 4.6</h4>
        <h4>38 minutes</h4>
      </div>
      <h5>Waffle, Desserts, Ice Cream</h5>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
