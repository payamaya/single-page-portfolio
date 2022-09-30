import '../styles/contact.css'
import { animateScroll as scroll } from 'react-scroll'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { children } from 'react'

const Contact = () => {
  const toTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div id='contact' className='contact' /* style={{ width: '100vw', height: '50vh' }} */>
      <h1>Contact</h1>
      <BsFillArrowUpCircleFill
        onClick={toTop}
        style={{
          margiLeft: '80rem',
          marginTop: '30rem',
          fontSize: '30px',
          cursor: 'pointer',
        }}
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor
        ipsa nisi a doloribus eligendi.
      </p>
    {children}
    </div>
  )
}
export default Contact
