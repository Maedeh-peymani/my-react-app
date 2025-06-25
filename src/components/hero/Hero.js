import "./Hero.css";
import heroImage from "../../assets/images/hero.svg";
import { Container, Row, Col } from "react-bootstrap";
import HeroBox from "../herobox/HeroBox";
import { FaUser } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipEndFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";



function Hero() {

  useEffect(()=>{
    AOS.init()

  }, [])

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-items-center" >
            <Col className="col-12 col-md-6" data-aos="zoom-in">
              <img src={heroImage} className="heroImg img-fluid " />
            </Col>
            <Col className="col-12 col-md-6" data-aos="zoom-in">
              <h2 className="heroTitle">Our Numbers Speaks For Themselves</h2>
              <Row className="justify-content-centre row-cols-1 row-cols-xl-2 gy-4">
                <Col>
                  <HeroBox title='Number Of Students' count='3500'>
                     <FaUser size='40px'/>
                  </HeroBox> 
                </Col>

                <Col> 
                  <HeroBox title='Number Of Articles' count='960'>
                      <MdArticle  size='40px'/>
                  </HeroBox>
                </Col>

                <Col>
                  <HeroBox title='Number Of Courses' count='19'>
                      <ImBooks size='40px'/>
                  </HeroBox>
                </Col>

                <Col>
                  <HeroBox title='successful project' count='15'>
                     <FaCode size='40px'/>
                  </HeroBox> 
                </Col>
              </Row>
              <p className="startLearning">
                <b>Start Of Training</b>
                <BsFillSkipEndFill size='40px'/>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#f3f4f5"
      d="m0 160 48 21.3C96 203 192 245 288 224s192-107 288-106.7C672 117 768 203 864 240s192 27 288 10.7c96-15.7 192-37.7 240-48l48-10.7V0H0Z"
    ></path>
  </svg>
    </>
  );
}
export default Hero;
