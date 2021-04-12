import  { useState, useEffect } from 'react'
import axios from 'axios'
 const Restaurants = () => {
     useEffect(() =>{
        async function getApi(){
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/restaurants`)
            console.log(response.data)
        }
        getApi()
     }, [])
     return(
         <div>

         </div>
     )
 }

 export default Restaurants