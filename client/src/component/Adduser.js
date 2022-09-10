import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../JS/userSlice/userSlice'
import '../style/adduser.css'
const Adduser = ({ping,setping}) => {
 const [user, setuser] = useState({
  name: '',
  age:'',
  favoritesFoods: [],
 })
 const dispatch = useDispatch()
 const [text, settext] = useState('')
 
 const [show, setshow] = useState(false)
 
    return (
<div className="container">
<button className='btn_food' onClick={()=>setshow(!show)}>add user</button>
{show?
    <div className="Adduser">
        <h1> ADD A NEW USER</h1>
        <input type="text" placeholder="name" onChange={(e)=>setuser({...user,name: e.target.value})} />
        <input type='number' placeholder="age" onChange={(e)=>setuser({...user,age: e.target.value})} />
        
        <div div className="food">
        <input value={text} type='text' placeholder="favorite food" onChange={(e)=>settext(e.target.value)} />
        <button className='btn_food'  onClick={(e)=>{setuser({...user,favoritesFoods:[...user.favoritesFoods, text]});}}>Add food</button>
    
        </div>
        <div className="Adduser_btns">
        <button className='btn_save'onClick={(e)=>{dispatch(addUser(user));setshow(!show);setping(!ping);}} >Save</button>
        <button className='btn_food' onClick={()=>setshow(!show)} >annuler</button>
        </div>
    </div>:null}
    </div>
  )
}

export default Adduser