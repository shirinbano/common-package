import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import FormInput from './components/Form/FormInput';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [click, setClick] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inpValue,setInpValue]=useState()
  let item = {
    id:0,
    type:'email',
    placeHolder:"giriş",
  }
  const btnClick = () => {
    setClick(!click);
    setDisabled(true)
    setLoading(true)
    
  }

  return (
    <div className="App">
      <div className=''>
        <FormInput item={item} onChangeText={(v)=>setInpValue(v)}/>
      </div>
      <div className='position-absolute w-100' style={{ bottom: '4%' }}>
        <Button title='hello' loading={loading} disabled={disabled} onPress={btnClick} />
      </div>
    </div>
  );
}

export default App;
