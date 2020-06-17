import * as actionType from '../Actions/restaurant';


const initialState = {
    restaurant: {}
}

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_RESTAURANTS:
            return {
                ...state,
                ...{
                    restaurant:action.payload
                }

                
            }
        default:
            return state
    }
}

export default restaurantReducer