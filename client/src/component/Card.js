import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delUser } from '../JS/userSlice/userSlice'
import '../style/card.css'
import Updateuser from './Updateuser'
const Card = ({user,setping,ping}) => {
    const dispatch=useDispatch()
    const [show, setshow] = useState(false)
  return (
    <div className="card">
    <div className="card_header">{user.name}</div>
    <div className='card_content'>
    <div className='cont'> <h3> User name :</h3>{user.name}</div>
    <div className='cont'> <h3> Age:</h3>{user.age} </div>
     <div className=' fv'><h3>Favoird foods:</h3><br/><ul>
        {user.favoritesFoods.map((el)=><li>{el}</li>)}</ul></div>
        <button onClick={()=>{setshow(!show); 
          <Updateuser  user={user} ping={ping} setping={setping} show={show} setshow={setshow}/>;}}>update</button>
        <button onClick={()=>{dispatch(delUser(user._id));setping(!ping);}}>delete</button>
        </div>
     
     
     </div>
 
    
  )
}

export default Card