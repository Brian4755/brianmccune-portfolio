import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const AboutMe = () => {
  const headline = "About Me"
  let headlineArray = headline.split('')

  useGSAP(() => {
    // ScrollTrigger.refresh()
    let mm = gsap.matchMedia();

    gsap.from('.about-headline', {
      scrollTrigger: {
        trigger: '.about > .container',
        toggleActions: 'play none none none',
        // markers: true
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out'
    })
    mm.add("(min-width: 768px)", () => {

      gsap.from('.img-container', {
        scrollTrigger: {
          trigger: '.self-image',
          toggleActions: 'play none none none',
          // markers: true
        },
        scale: 0.5,
        duration: 0.8,
      })

      gsap.set('.img-container', {
        scale: 1
      })

      // ScrollTrigger.refresh()
      gsap.to('.img-container', {
        scrollTrigger: {
          trigger: '.about',
          start: () => 'top ' + (-window.innerWidth*0.27 + 240),
          end: () => 'bottom ' + (window.innerWidth*0.09 + 430),
          pin: '.text',
          scrub: true,
          // immediateRender: true,
          // markers: true
        },
      })
      // gsap.to('.img-container', {
      //   scrollTrigger: {
      //     trigger: '.img-container',
      //     start: () => 'top ' + (-window.innerWidth*0.04 + 240),
      //     end: () => 'bottom ' + (window.innerWidth*0.25 + 250),
      //     pin: '.text',
      //     scrub: true,
      //     // immediateRender: true,
      //     markers: true
      //   },
      // })
    });
  })

  return ( 
    <div className="about" id="about">
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="about-headline">
              <span key={headlineArray[index]} className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="container">
        <div className="img-container">
          <img className="self-image" src="./headshot.jpg" alt='developer headshot' />
        </div>
        <img className="mobile-image" src="./headshot.jpg" alt='developer headshot' />
        <div className="text">
          <h3>Intro and hobbies</h3>
          <p>
            I am a creative frontend developer based in Austin, Texas. I am passionate towards creating frontend modern websites and using my work to impact and connect with small businesses.
          </p>
          <p>
            When I am not developing, I love to set my time aside to play the guitar or Dance Dance Revolution at the arcade.
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default AboutMe;