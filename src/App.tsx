import React, { useEffect, useState } from 'react';
import './App.css';
import BorderButton from './components/Button/BorderButton';
import Button from './components/Button/Button';
import FormInput from './components/Form/FormInput';
import FormSelect from './components/Form/FormSelect';
import LoginHeader from './components/Header/LoginHeader';
import LinkingTxt from './components/LinkingTxt/LinkingTxt';
import MiddleTxt from './components/HorizontalLine/MiddleTxt';
import Google from './Assets/Icons/Google.svg';
import Facebook from './Assets/Icons/Facebook.svg';
import Apple from './Assets/Icons/Apple.svg';
import IpGeolocation from './components/IpGeolocation/IntlTelField';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/custom.scss";
import "./Styles/global.css"

function App() {
  const [click, setClick] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inpValue, setInpValue] = useState();
  const [hanlde, setHandle] = useState(false);
  const [btnNumber, setBtnNumber] = useState(1)


  let item = {
    id: 0,
    type: 'email',
    placeHolder: "giriş",
    data: [{ id: 0, title: "hi" }, { id: 1, title: "hello" }],
    typeMode: 'password',
    hint: true
  }
  const btnClick = () => {
    setClick(!click);
    setDisabled(true)
    setLoading(true)

  }

  const btnHandle = (value: number) => {
    setBtnNumber(value);
    setHandle(!hanlde);
  }





  return (
    <div>
      <div>
        <LoginHeader />
      </div>
      <div className='d-flex justify-content-between'>
        <div className='col mx-1'>
          <BorderButton title='ÜYE GİRİŞ' btnClick={() => btnHandle(1)} disabled={hanlde} customId={1} btnNumber={btnNumber} />
        </div>
        <div className='col mx-1'>
          <BorderButton title='ÜYE KAYIT' btnClick={() => btnHandle(2)} disabled={hanlde} customId={2} btnNumber={btnNumber} />
        </div>
      </div>
      <div className=''>
        <FormInput item={item} onChangeText={(v) => setInpValue(v)} value={inpValue} />
      </div>
      <div>
        <FormSelect item={item} />
      </div>
      <div className='d-flex justify-content-between'>
        <LinkingTxt text='Hızlı Giriş' />
        <LinkingTxt text='Şifre Yenile' linkClass='text-activeOrange text-decoration-none' />
      </div>
      <div className='w-100 my-4' style={{ bottom: '4%' }}>
        <Button title='GİRİŞ YAP' loading={loading} disabled={disabled} onPress={btnClick} customStyle={`${disabled ? "bg-passiveOrange" : "bg-activeOrange"} text-white customSize`} />
      </div>
      <div>
        <MiddleTxt text='Sosyal Hesap İle Giriş Yap' />
      </div>
      <div className='d-flex justify-content-center'>
        <LinkingTxt logo={Google} divClass='shadow m-1 p-2 rounded-2' />
        <LinkingTxt logo={Facebook} divClass='shadow m-1 p-2 rounded-2' />
        <LinkingTxt logo={Apple} divClass='shadow m-1 p-2 rounded-2' />
      </div>
      <div>
        <IpGeolocation />
      </div>
    </div>
  );
}

export default App;
