import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Sectionfive.css'
const Sectionfive = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = 'service_ilkddta'
    const templateId = 'template_9gaqevn'
    const publicKey = 'Rr7aMRVjPhfzvz5xo'

    // Create a new object that contain dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Uzo Emeka',
      message: message,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending')
      })
  }

  return (
    <div className="section-one-con ">
      <h4 className="section_header_text">Contact Me</h4>

      <div className="row justify-content-center align-items-center py-5">
        <div className="col-lg-3" style={{ position: 'relative' }}>
          <div className="purpule_con">
            <div className="img-con-one">
              <img src="/images/cont.png" alt="image" />
            </div>
          </div>
          {/* <div className="arrow_img_con">
          <img src="/images/arrow.svg" alt="" />
        </div> */}
        </div>
        <div className="col-lg-5 ">
          <div class="form-container">
            <form class="form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="email">Company Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="email">Company Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="textarea">Talk to me 😁😁</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  required=""
                >
                  {' '}
                </textarea>
              </div>
              <button class="form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="bblob"></div>
    </div>
  )
}

export default Sectionfive
