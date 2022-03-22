import { Component } from "react";
import profilePhoto from './profile.jpeg';
import './intro.css';

class Intro extends Component{
    render() {
        return (
        <main className="main_intro">
          <img id="main_photo" src={profilePhoto}/>
          <div className="intro">
            <h1>Albin Paul</h1>
            <p class="my__description">I am a Full Stack Software Engineer. 
            I have 4 years of total work experience. I have worked 3 years as a Software Engineer and 1 year as a
  DevOps Engineer. My primary toolset is in C++, Java, SQL and Python. In my spare time, I love
  contributing back to the community via Stackoverflow.</p>
          <h3>Contact Me</h3>
          <a className="contact_icons" href="https://www.linkedin.com/in/albin-paul-ks/" target="_blank">
            <i class="fa-2x fa-brands fa-linkedin"></i>
          </a>
          <a className="contact_icons"  href="mailto:albinpaul.ks@gmal.com" target="_blank">
            <i class="fa-2x fa-regular fa-envelope"></i>
          </a>
          
          </div>
        </main>  
        );
    }
}
export default Intro;