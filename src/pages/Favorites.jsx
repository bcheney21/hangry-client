import { useEffect, useState } from 'react'
import axios from 'axios'

const Favorites = (props) =>{
    const [faves, setFaves] = useState([])
    useEffect(() => {
        async function getData(){
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.user._id}/favorites`)
                console.log(response.data)
                setFaves(response.data)
            } catch(error){
                console.log(error)
            }
        }
        if(props.user){
            getData()
        }
    }, [props.user])
    const newArray = faves.map((fave, idx) => {
        return (
          <li key={idx} className="list-item">
            {fave.name}
          </li>
        );
      });
    return(
        <div>
            your favorite places to grub
            <h1>{newArray}</h1>
        </div>
    )
}
export default Favorites