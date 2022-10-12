import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const IpGeolocation = () => {

  // function json(url: any) {
  //   return fetch(url).then(res => res.json());
  // }

  // let apiKey = '40c4825cb3a4717869a82daa87ab7142259c8669097f3cf082fa138c';
  // json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  //   console.log(data);
  //   // so many more properties
  // });


  return (
    <div>
      <PhoneInput
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true
        }}
        country={'tr'}
      />
    </div>
  )
}

export default IpGeolocation;