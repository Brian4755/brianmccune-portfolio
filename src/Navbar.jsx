import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import CodeIcon from "./CodeIcon";


const Navbar = (props) => {


  useGSAP(() => {
    gsap.from('.navbar', {
      y: -50,
      duration: 0.8,
      delay: 2.4
    })
  })

  return ( 
    <div className="navbar">
      <div className="brand">
        <CodeIcon />
        <h1>McCune</h1>
      </div>
      <Link to="about" className="link"><h2>About</h2></Link>
      <Link to="expertise" offset={-70} className="link"><h2>Expertise</h2></Link>
      <Link className="link"><h2>Projects</h2></Link>
      <button>Let's Chat</button>
    </div>
   );
}
 
export default Navbar;