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
    const favsArray = faves.map((fave, idx) => {
        return (
          <ul key={idx} className="list-item">
            {fave.name}
          </ul>
        );
      });
    return(
        <div>
            <div className='favs'>
            </div>
            <div className='favsText'>
                <h1>Your Favorite Places to Grub</h1>
                <p>{favsArray}</p>
            </div>
        </div>
    )
}
export default Favorites