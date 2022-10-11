import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const IpGeolocation = () => {
  return (
    <div>
      <PhoneInput
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true
        }}
      />
    </div>
  )
}

export default IpGeolocation;