import  { useState, useEffect, onChange } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Restaurants = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [zipcode, setZipcode] = useState('93103')
    const favButtonStyle = {
        justifyContent: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        color: 'orange',
      };
    useEffect(() =>{
        async function getApi(){
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/restaurants/${zipcode}`)
            console.log(response.data.restaurants)
            // const jsonData = response.data
            setRestaurants(response.data.restaurants)
        }
        getApi()
    }, [])
    async function saveFavoriteRestaurant(restaurantName){
        const url = `${process.env.REACT_APP_SERVER_URL}/users/${props.user._id}/${restaurantName}`
        const response = await axios.post(url)
        console.log(response)
    }
    let restaurant_name = <p>'restaurant loading'</p>
    if(restaurants){
        restaurant_name = restaurants.map((restaurant, index) =>{
            return <div key={index}><Button 
            variant="secondary" 
            style={favButtonStyle}
            onClick={() => saveFavoriteRestaurant(restaurant.restaurant_name)}
            // href={url}
            >
            {restaurant.restaurant_name}
            </Button>
            <br/>
            </div>
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
                    Enter your Zipcode: 
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