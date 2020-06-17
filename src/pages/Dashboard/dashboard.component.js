import React, { useState, Fragment } from 'react';
import './dashboard.css';
import ListItem from '../../ListItem';
import { searchRestaurant } from '../../API/Restaurant';

function Dashboard(props) {
    const [city, setCity] = useState('');
    const [filter, setFilter] = useState('');
    const [restaurants, setRestaurants] = useState([]);
console.log(props.restaurants)
    if (restaurants.length === 0 && filter === "" && props.restaurants !== restaurants) {
        setRestaurants(props.restaurants)
    }
    console.log(restaurants)

    const handleSubmit = () => {
        props.searchRestaurant(city)
    }


    const search = (restaurant, filterValue) => {
        if (restaurant.name.includes(filterValue) || restaurant.name.toLowerCase().includes(filterValue)) {
            return restaurant;
        }
        if (restaurant.address.includes(filterValue)) {
            return restaurant;
        }
        if (restaurant.area.includes(filterValue)) {
            return restaurant;
        }
    }

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
        const result = props.restaurants.filter((restaurant) => (
            search(restaurant, filterValue)
        ));
        setRestaurants(result)

    }

    return (
        <div className="dashboard">
            <Fragment>
                <label>  City: </label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            </Fragment>

            <Fragment>
                <label>  filter: </label>
                <input type="text" value={filter} onChange={(e) => handleFilter(e.target.value)} />

            </Fragment>
            <button type="submit" onClick={() => handleSubmit()} >Submit</button>
            <ListItem restaurants={restaurants} />

        </div>

    )
}

export default Dashboard;
