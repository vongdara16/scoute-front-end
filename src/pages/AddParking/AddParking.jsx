import { useState, useRef, useEffect } from "react"

const AddParking = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    author: '',
    street: '',
    city: '',
    state: '',
    isSafe: false,
    isFree: false,
    lightQuality: 1,
    cleanliness: 1,
    isCovered: false
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}


  const handleSubmit = evt => {
    evt.preventDefault()
    const parkingFormData = new FormData()
    parkingFormData.append('author', formData.author)
    parkingFormData.append('street', formData.street)
    parkingFormData.append('city', formData.city)
    parkingFormData.append('state', formData.state)
    parkingFormData.append('isSafe', formData.isSafe)
    parkingFormData.append('isFree', formData.isFree)
    parkingFormData.append('lightQuality', formData.lightQuality)
    parkingFormData.append('cleanliness', formData.cleanliness)
    parkingFormData.append('isCovered', formData.isCovered)
  }
  return (
    <>
      <div>add puppies</div>
    </>
    );
}

export default AddParking;