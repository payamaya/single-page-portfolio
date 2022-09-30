import '../styles/footer.css'
import One from '../images/code.jpg'
import Two from '../images/im.jpg'
import Three from '../images/view.jpg'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Four from '../images/OIP.jpg'
import Logo from "../images/watercolor.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-grid'>
        <div className='f1'>
         <img src={Logo} style={{height:"80px"}} alt="" />
          <div className='f-links'>
            <h3>Home</h3>
            <h3>Services{/* eller nogåt vettigt såsom projects */}</h3>
            <h3>About</h3>
          </div>
        </div>
        <div className='f2'>
          {/* googla på ikoner */}
          <span>
            <img style={{ height: '40px' }} src={One} alt='' />
            <p>My Adress</p>
          </span>
          <span>
            <img style={{ height: '40px' }} src={Two} alt='' />
            <p>Git Hub</p>
          </span>
          <span>
            <img style={{ height: '40px' }} src={Three} alt='' />
            <p>paulyashou81@gmail.com</p>
          </span>
        </div>
        <div className='f3'>
          <p>Wana see more</p>
          <div className='f-icons'>
            <img src={Facebook/* Facebook */} style={{ height: '40px' }} alt='' />
            <img src={Instagram/* Instagram */} style={{ height: '40px' }} alt='' />
            <img src={Twitter /* Twitter */} style={{ height: '40px' }} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
