import { useEffect } from 'react'
import axios from 'axios'

const Favorites = (props) =>{
    useEffect(() => {
        async function getData(){
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.user._id}/favorites`)
                console.log(response.data)
            } catch(error){
                console.log(error)
            }
        }
        if(props.user){
            getData()
        }
    }, [props.user])

    return(
        <div>
            your favorite places to grub
        </div>
    )
}
export default Favorites