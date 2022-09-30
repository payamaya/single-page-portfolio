import "../styles/buttons.css"
import "../styles/contactform.css"
const ContactForm = () => {
  return (
    <>
      <h1 className='contact-title'>Wanna Talk</h1>
      <p className='contact-info'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
        optio? Nesciunt deserunt asperiores sed ullam molestias reiciendis
        doloremque, impedit nemo?
      </p>
      <form className='contact-form'>
        <div className='form-control'>
          <label htmlFor='namn'>Namn</label>
          <input placeholder='namn' className='form-input' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input placeholder='E-post' className='form-input' />
        </div>
        <div className='message'>
          <p>meddelande:</p>
          <textarea name='' id='' cols='30' rows={9} placeholder="skriv ditt meddelande här" className="message"></textarea>
        </div>
      </form>
      <button type="submit" className="big-button">Press Button</button>
    </>
  )
}
export default ContactForm
