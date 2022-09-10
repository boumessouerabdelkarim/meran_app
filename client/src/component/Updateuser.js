import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updtUser } from '../JS/userSlice/userSlice';
import "../style/adduser.css"

const Updateuser = ({ping,setping,user,show,setshow}) => {
  const dispatch =useDispatch();
  const [update, setupdate] = useState({
    name: '',
    age: '',
    
  })
  return (
   <div> {show?
    < div className="Adduser">
    <h1> UPDATE A  USER</h1>
    <input type="text" placeholder="name" onChange={(e)=>setupdate({...update,name: e.target.value})} />
    <input type='number' placeholder="age" onChange={(e)=>setupdate({...update,age: e.target.value})} />
    
    <div className="Adduser_btns">
    <button className='btn_save'onClick={(e)=>{dispatch(updtUser(user._id,update));setping(!ping); setshow(!show);}} >Save</button>
    <button className='btn_food' onClick={()=>setshow(!show)} >annuler</button>
    </div>
    </div>:null}</div>
  )
}

export default Updateuser