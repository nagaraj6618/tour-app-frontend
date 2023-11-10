import React ,{useState}from 'react'
import './UploadComponent.css'
const UploadComponent = () => {
   const [formData, setFormData] = useState({
      title: '',
      city: '',
      distance: '',
      price: '',
      maxSize: '',
      file: null,
      address: '',
      description: '',
   });

   const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: type === 'file' ? files[0] : value,
      }));
   };
   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
   }
   return (
      <div className='containers'>
         <form className='form-container'  onSubmit={handleSubmit}>
            <div>
               <input type='text'
                name='title'
                  placeholder='Enter the Title'
                  value={formData.title}
                  onChange={handleChange}
               />
            </div>
            <div>
               <input type='text'
                  name='city'
                  placeholder='Enter the City'
                  value={formData.city}
                  onChange={handleChange}
               />
            </div>
           
            <div>
               <input type='number'
                  placeholder='Enter the Distance'
               />
            </div>
            <div>
               <input type='number'
                  placeholder='Enter the Price'
               />
            </div>
            <div>
               <input type='number'
                  placeholder='Maximum Group Size'
               />
            </div>
            <div>
               <input type='file'
                  name='file'
                  // value={formData.file}
                  onChange={handleChange}
               />
            </div>
            <div>
               <textarea type='text'
                  placeholder='Enter the Address'
               />
            </div>
            <div>
               <textarea type='text'
                  placeholder='Enter the description'
               />
            </div>
            <div>
               <button type='submit'>submit</button>
            </div>
         </form>

      </div>
   )
}

export default UploadComponent