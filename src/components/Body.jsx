// demo data
// import { resList } from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import SimmerComponent from "./Shimmer";

const BodyComponent = () => {
  //PowerFull State Variable
  let [restaurantList, setRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const apiData = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const dataJson = await apiData.json();
    const apiResList =
      dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(apiResList.map((res) => res.info));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList.length === 0 ? (
    <SimmerComponent />
  ) : (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          restaurantList = restaurantList.filter((res) => res.avgRating > 4.3);
          setRestaurantList(restaurantList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filterRes = restaurantList.filter((res) => {
              return res.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setRestaurantList(filterRes);
          }}
        >
          Submit
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard key={res.id} restaurant={res}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
