import  { useState, useEffect } from 'react'
import axios from 'axios'
 const Restaurants = () => {
     const [restaurants, setRestaurants] = useState([])
     useEffect(() =>{
        async function getApi(){
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/restaurants`)
            console.log(response.data)
            const jsonData = response.data
            setRestaurants(jsonData)
        }
        getApi()
     }, [])
     return(
         <div>
             <li className="rest">{restaurants.restaurant_name}</li>
         </div>
     )
 }

 export default Restaurants