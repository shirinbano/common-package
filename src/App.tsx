import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import FormInput from './components/Form/FormInput';
import FormSelect from './components/Form/FormSelect';
import LoginHeader from './components/Header/LoginHeader';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/custom.scss";
import "./Styles/global.css"

function App() {
  const [click, setClick] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inpValue, setInpValue] = useState()
  let item = {
    id: 0,
    type: 'email',
    placeHolder: "giriş",
    data: [{ id: 0, title: "hi" }, { id: 1, title: "hello" }]
  }
  const btnClick = () => {
    setClick(!click);
    setDisabled(true)
    setLoading(true)

  }

  return (
    <div>
      <div>
        <LoginHeader />
      </div>
      <div className=''>
        <FormInput item={item} onChangeText={(v) => setInpValue(v)} />
      </div>
      <div>
        <FormSelect item={item} />
      </div>
      <div className='position-absolute w-100' style={{ bottom: '4%' }}>
        <Button title='GİRİŞ YAP' loading={loading} disabled={disabled} onPress={btnClick} className='bg-danger' />
      </div>
    </div>
  );
}

export default App;
