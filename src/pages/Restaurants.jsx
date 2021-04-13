import  { useState, useEffect, onChange } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [zipcode, setZipcode] = useState('93103')
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
            return <ul key={index}>{restaurant.restaurant_name}
            <Button variant="danger" class ="button">Danger</Button>
            </ul>
        }) 
    }
    const onChangeHandler = event => {
        event.preventDefault()
        setZipcode(event.target.value);
    };
    return(
        <div>
            <form>
                <label>
                    Zipcode:
                    {/* <input type="text" name="name" onChange={e => setZipcode(e.target.value)}/> */}
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