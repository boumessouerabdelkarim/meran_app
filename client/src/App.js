
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Adduser from './component/Adduser';
import Listuser from './component/Listuser';
import { getUser } from './JS/userSlice/userSlice';

function App() {
  const dispatch = useDispatch()
  const [ping, setping] = useState(false)

  useEffect(() => {
    dispatch(getUser())
  }, [ping, dispatch])

  return (
    <div className="App">
      <Adduser ping={ping} setping={setping} />
      <Listuser ping={ping} setping={setping} />

    </div>
  );
}

export default App;
