import { animateScroll as scroll } from 'react-scroll'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
const Contact = () => {
  const toTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div id='contact' style={{ width: '100vw', height: '50vh' }}>
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
    </div>
  )
}
export default Contact
