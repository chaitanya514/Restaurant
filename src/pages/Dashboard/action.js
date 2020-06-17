import * as restaurantApi from "../../API/Restaurant"
import * as ActionTypes from '../../Actions/restaurant'

const fetchRestaurants= (restaurants)=>({
    type:ActionTypes.FETCH_RESTAURANTS,
    payload:restaurants

})

export const searchRestaurant = (city) => async (dispatch,getState)=>{
    try{
        const {restaurants}= await restaurantApi.searchRestaurant(city)
        dispatch(fetchRestaurants(restaurants))
        console.log("restaurant",restaurants)
    }
    catch(err){
        console.log('error',err)

    }
}