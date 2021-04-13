import  { useState, useEffect } from 'react'
import axios from 'axios'
 const Restaurants = () => {
     const [restaurants, setRestaurants] = useState([])
     useEffect(() =>{
         async function getApi(){
             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/restaurants`)
             console.log(response.data.restaurants)
             // const jsonData = response.data
             setRestaurants(response.data.restaurants)
            }
            getApi()
        }, [])
        
        
     let restaurant_name = <p>'restaurant loading'</p>
     if(restaurants == []){
        restaurant_name = <p>'restaurant loading'</p> 
     } else {
        restaurant_name = <li className="rest">{restaurants[0].restaurant_name}</li>  
     }

     return(
         <div>
             {restaurant_name}
         </div>
     )
 }

 export default Restaurants