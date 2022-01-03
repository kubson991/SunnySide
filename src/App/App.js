import React from "react";
import "./App.css";
import arrowDown from "../images/icon-arrow-down.svg";
import Information from "../Information";
import Fruit from "../FruitSection";
import fruta1 from "../images/mobile/image-graphic-design.jpg";
import fruta1D from "../images/desktop/image-graphic-design.jpg";
import fruta2 from "../images/mobile/image-photography.jpg";
import fruta2D from "../images/desktop/image-photography.jpg";
import testimonial1 from "../images/image-emily.jpg";
import testimonial2 from "../images/image-thomas.jpg";
import testimonial3 from "../images/image-jennie.jpg";
import gallery1 from "../images/mobile/image-gallery-milkbottles.jpg"
import gallery2 from "../images/mobile/image-gallery-orange.jpg"
import gallery3 from "../images/mobile/image-gallery-cone.jpg"
import gallery4 from "../images/mobile/image-gallery-sugar-cubes.jpg"
import Opinion from "../Opinion"
import MenuMovile from "../MenuMovile"
import react from "react";

function App() {
  const content = [
    {
      title: "Transform your brand",
      info: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients throuhg compelling visuals that do most of the marketing for you.",
      color: "var(--Yellow)",
    },
    {
      title: "Stand out to the right audience",
      info: "Using a collaborative formula of designers, researchers, photographers, videographers and copywriters , we`ll build and extend your brand in digital places.",
      color: "var(--Softred)",
    },
  ];
  const fruitSection = [
    {
      title: "Graphic Design",
      content:
        "Great design makes you memorable. We deliver atwork that underscores your brand message and captures potential clientes`s attention.",
      img: fruta1,
      imgD:fruta1D,
      color: "var(--Darkdesaturated)",
    },
    {
      title: "Photography",
      content:
        "Icrease your credibility by getting the most stunning,high-quality photos that improve your business image.",
      img: fruta2,
      imgD:fruta2D,
      color: "var(--Darkblue)",
    },
  ];
  const testimonials = [
    {
      img: testimonial1,
      content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      job: "marketing Director",
    },
    {
      img: testimonial2,
      content: "Sunnyside`s enthusiasm coupled with their keen interest in our brand`s success made it a satisfyng and enjoyable expirience.",
      name: "Thomas S.",
      job: "Chief Operating Officer",
    },
    {
      img: testimonial3,
      content: "Increible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!",
      name: "Jennie F.",
      job: "Business Owner",
    },
  ];
  const [popup,setpopup] = react.useState(false)
  function closePopup(){
    setpopup(false)  
  }
  return (
    <>
      <header>
        <nav>
          <span className="headerTitle" />
          <button className="hamburgerMenu" onClick={()=>setpopup(true)}></button>
          {popup ? <MenuMovile close = {closePopup}></MenuMovile> : null}
          <div className="desktopMenu">
            <button>About</button>
            <button>Services</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </nav>
        <h1>WE ARE CREATIVES</h1>
        <img
          src={arrowDown}
          alt="arrow"
          className="arrowDown"
          aria-hidden="true"
        />
      </header>
      <main>
        <div className="egg" id="egg" />
        <Information
          title={content[0].title}
          info={content[0].info}
          color={content[0].color}
        />
        <div className="cup" />
        <Information
          title={content[1].title}
          info={content[1].info}
          color={content[1].color}
        />
        <Fruit
          title={fruitSection[0].title}
          content={fruitSection[0].content}
          img={fruitSection[0].img}
          imgD={fruitSection[0].imgD}
          color={fruitSection[0].color}
        ></Fruit>
        <Fruit
          title={fruitSection[1].title}
          content={fruitSection[1].content}
          img={fruitSection[1].img}
          imgD={fruitSection[1].imgD}
          color={fruitSection[1].color}
        ></Fruit>
        <section className="testimonialsContainer">
          <h3 id="testimonials" className="testimonialsTitle">Client Testimonials</h3>
          {testimonials.map((testimonial,index)=>(<Opinion name={testimonial.name} content={testimonial.content} img={testimonial.img} job={testimonial.job} key={index}/> ))}
        </section>
        <section className="imgGallery">
          <img src={gallery1} alt="milk"></img>
          <img src={gallery2} alt="orange"></img>
          <img src={gallery3} alt="cone"></img>
          <img src={gallery4} alt="sugar"></img>
        </section>
      </main>
      <footer>
        <span className="titleFooter"></span>
        <nav className="footerNav">
          <a tabIndex="0" href="#testimonials">About</a>
          <a tabIndex="0" href="#xd">Services</a>
          <a tabIndex="0" href="#egg">Projects</a>
        </nav>
        <div className="footerIconContainer">
          <a href="https://www.facebook.com/sebastian.povedaflorez"><span tabIndex="0"></span></a>
          <a href="https://www.instagram.com/sebastianpovedaflorez/"><span tabIndex="0"></span></a>
          <a href="/"><span tabIndex="0"></span></a>
          <a href="https://co.pinterest.com/poveda1999/_saved/"><span tabIndex="0"></span></a>
        </div>
      </footer>
    </>
  );
}

export default App;
