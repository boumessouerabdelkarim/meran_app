import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

const Listuser = ({ping,setping}) => {
  const users = useSelector((state) => state.user.user);
  return (
    <div className="list-user">
      {users?users.map((el)=><Card user={el} ping={ping}setping={setping}/>):<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999"
      alt='img'/>}
    </div>
  )
  }

export default Listuser