import { forwardRef } from "react";

// const Home = (props) => {

  

//   return ( 
//     <div className="home" onWheel={props.handleOnWheel}>
//       <div className="homeTitle">Hi, I&apos;m Brian</div>
//       <div className="homeIntro">Front-End Software Developer</div>
//       <div className="homeBio">Self-challenging and detail-oriented front-end developer, keeping up with emerging trends and technologies within web development.</div>
//     </div>
//    );
// }
 
// export default Home;

const Home = forwardRef((props, ref) => {
  console.log(ref)
  return ( 
    <div ref={ref} className="home" onWheel={props.handleOnWheel}>
      <div className="homeTitle">Hi, I&apos;m Brian</div>
      <div className="homeIntro">Front-End Software Developer</div>
      <div className="homeBio">Self-challenging and detail-oriented front-end developer, keeping up with emerging trends and technologies within web development.</div>
    </div>
   );
})
 
export default Home;