import g10 from "../assets/g10.svg";
import team from "../assets/team-picture.jpeg";
import '../App.css';
import Auth from "../Auth";
  
  export default function Home() {
    return (
      <>
      <div className="top-of-page-wrapper">
          <nav className="nav-container">
              <div className="title-name">Beavs<span className="ai">AI</span></div>
              <div className="home-button">Home</div>
              <div className="features-button">Features</div>
              <div className="about-button">About</div>
              <div className="resources-button">Resources</div>
              <Auth/>
          </nav>
      </div>

      <div className="body-1-wrapper">
          <div className="intro-header">Beavs.<span className ="ai">AI</span> <br /> Oregon State's Artifical Intelligence </div>        
          <div className="intro-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequatur quasi ab ex obcaecati, non aliquid alias ut eius perspiciatis quos aut quidem minima nemo sint nihil dolore maxime aliquam?</div>
          <div className="intro-action-button">Start Chatting for Free!</div>
          <div className="intro-robot"><img src={g10} /></div> 
      </div>

      <div className="body-2-wrapper">
        <div className="body-2-header">About Us</div>
        <div className="body-2-description">We have an amazing team here at Oregon State University!<br />Oregon State App Development Club</div>
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <div className="box-4"></div>
        <div className="box-5"></div>
        <div className="box-6"></div>
        <div className="box-7"></div>
        <div className="box-8"></div>
        <div className="box-9"></div>
      </div>

      <div className="body-3-wrapper">
        <div className="text-container">
            <div className="body-3-header">Our Design and Development Team <br /> Oregon State University</div>
            <div className="body-3-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sed ea incidunt deserunt ad, temporibus necessitatibus quaerat voluptates nemo mollitia assumenda delectus
                 ex praesentium quam repudiandae magni alias? Dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam ut tempora. Incidunt labore reprehenderit veritatis exercitationem temporibus, nesciunt harum esse eum accusamus dignissimos 
                 sint perferendis voluptate animi? Cum, dolores!</div>
        </div>
        <div className="body-3-team-photo"> <img src={team}/> </div>
    </div>


      <div className="body-4-wrapper">
        <div className="body-4-header">FAQ</div>
        <div className="faq-box-1"></div>
        <div className="faq-box-2"></div>
        <div className="faq-box-3"></div>
        <div className="faq-box-4"></div>
        <div className="faq-box-5"></div>
        <div className="faq-box-6"></div>
        <div className="faq-box-7"></div>
        <div className="faq-box-8"></div>
        <div className="faq-box-9"></div>
    </div>
      </>
    );
  }