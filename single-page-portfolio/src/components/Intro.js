import Buttons from "./Buttons"
import"../styles/intro.css"
const Intro=()=>{
 return(
<>
 
 <div className="intro-img"> <h1>Image</h1>
 <h1 style={{marginLeft:"5rem"}}>Hero Image</h1>

</div>
<div className="cta">
 <h2>Lorem, ipsum dolor sit amet  elit.!</h2>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut voluptates nesciunt minus, est quia enimharum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab, possimus error nihil asperiores labore.</p>
 <Buttons/>
</div>
</>
 )
}
export default Intro