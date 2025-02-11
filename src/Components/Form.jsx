import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLocation } from 'react-router-dom'

export const Form = () => {
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientProduct, setClientProduct] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientMessage, setClientMessage] = useState('')

  const location = useLocation()
  const isPricingPage = location.pathname === '/Pricing'

  const handleForm = async e => {
    e.preventDefault()

    try {
      const serviceId = 'service_0137d8m'
      const templateId = 'template_4xfe1u9'
      const publicKey = 'Lqec2_aqS-ZJvQX_H'

      const templateParams = {
        from_name: clientName,
        from_email: clientEmail,
        to_name: '',
        clientPhone,
        clientProduct,
        message: clientMessage,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setClientName('')
      setClientEmail('')
      setClientProduct('')
      setClientPhone('')
      setClientMessage('')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="Section Form">
      <div className="contact-center">
        <span>CONTACT US</span>
        <span>Got any inquiries?</span>
        <span> Call or email us today!</span>
        <p>info@lionsautogps.com</p>
        <span>+254 715 13 28 28</span>
      </div>

      {!isPricingPage && (
        <form className="form-submit" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Your Name*"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address*"
            value={clientEmail}
            onChange={e => setClientEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone number"
            value={clientPhone}
            onChange={e => setClientPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product Interested"
            value={clientProduct}
            onChange={e => setClientProduct(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            value={clientMessage}
            onChange={e => setClientMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      )}

      {isPricingPage && (
        <form className="form-submit" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Company Name *"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Company Email *"
            value={clientEmail}
            onChange={e => setClientEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Company Phone number *"
            value={clientPhone}
            onChange={e => setClientPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product Interested *"
            value={clientProduct}
            onChange={e => setClientProduct(e.target.value)}
          />

          <textarea
            placeholder="Your Message *"
            value={clientMessage}
            onChange={e => setClientMessage(e.target.value)}
          ></textarea>

          <button type="submit">Request Quote</button>
        </form>
      )}
    </div>
  )
}
