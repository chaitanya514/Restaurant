import React from "react"
const ListItem = (props) => {
    const restaurants = Array.from(props.restaurants)
    const listItems = restaurants.map((restaurant) =>
        <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.area}</p>

            <p>${restaurant.price}</p>
        </div>

    )
    return(
        <div>
            <h3>ListView</h3>
            {listItems}
        </div>
    )

}
export default ListItem