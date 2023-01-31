import axios from "axios";

// create asynchronous function for API call in javascript?
export const RestaurantListAction = () =>async (dispatch) => { // No need to make this async

  const result= await axios.get('/restaurants.json')
  console.log(result);
};




