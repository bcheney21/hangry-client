import  { useState, useEffect, onChange } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [zipcode, setZipcode] = useState('93103')
    const [newFav, setNewFav] = useState('')
    useEffect(() =>{
        async function getApi(){
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/restaurants/${zipcode}`)
            console.log(response.data.restaurants)
            // const jsonData = response.data
            setRestaurants(response.data.restaurants)
        }
        getApi()
    }, [])
    let restaurant_name = <p>'restaurant loading'</p>
    if(restaurants){
        restaurant_name = restaurants.map((restaurant, index) =>{
            // const url = process.env.REACT_APP_SERVER_URL + "/" + {add userid variable} + "/" + restaurant.restaurant_name
            return <Button 
            variant="secondary" 
            key={index} 
            class="row col-12"
            onChange={(e) => setNewFav(e.restaurant_name)}
            // href={url}
            >
            {restaurant.restaurant_name}
            </Button>
        }) 
    }
    // add user id variable 
    // axios.post wrapped around when button is clicked


    const onChangeHandler = event => {
        event.preventDefault()
        setZipcode(event.target.value);
        console.log(zipcode)
    };
    return(
        <div>
            <form>
                <label>
                    Zipcode:
                    <input
                        type="text"
                        name="zipcode"
                        onChange={onChangeHandler}
                        value={zipcode}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {restaurant_name}
        </div>
    )
}

export default Restaurants