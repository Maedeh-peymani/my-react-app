import { Container, Row,Col} from "react-bootstrap";
import './Home.css'
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules'
import "swiper/css";
import SwiperButton from "../../components/swiperButtons/SwiperButton";
import CourseItem from "../../components/course/CourseItem";


function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost/react/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));

      axios
      .get("http://localhost/react/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);

  
  return (
    <>
      <MyNavbar />
      <Hero />
      <Container >
      <Row className="py-3">
          <Swiper 
          className="customSwiperStyle"
          spaceBetween={30}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200 :{
              slidesPerView :4
            },
            992 :{
              slidesPerView :3
            },
            768 :{
              slidesPerView : 2
            },
            500 :{
              slidesPerView:1
            }
          }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">The Latest ourses</h2>
              <SwiperButton/>
            </div>
            {courses.map( (course) =>(
              <SwiperSlide> <CourseItem {...course} /> </SwiperSlide>
            ))}
          </Swiper>
        </Row>
     
        <Row className="py-3">
          <Swiper 
          className="customSwiperStyle"
          spaceBetween={30}
          autoplay={{
            delay: 3000, //every 2.5 second
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200 :{
              slidesPerView :4
            },
            992 :{
              slidesPerView :3
            },
            768 :{
              slidesPerView : 2
            },
            500 :{
              slidesPerView:1
            }
          }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">The Latest Articles</h2>
              <SwiperButton/>
            </div>
            {articles.map( article =>(
              <SwiperSlide><ArticleItem {...article} /></SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
