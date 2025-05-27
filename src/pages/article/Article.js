import axios from "axios";
import {useNavigate, useParams,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Container, Row, Col, Button} from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { BiTimeFive, BiCategoryAlt} from "react-icons/bi";
import { MdDelete, MdOutlineEditCalendar } from "react-icons/md";
import './Article.css';
import Swal from "sweetalert2";




function Article(){

  const articleId  =useParams().articleId;
  const [articleData, setArticleData] = useState({});
  const navigate = useNavigate();


 useEffect(() => {
  axios.get(`http://localhost:8000/articles/${articleId}`)
  .then (response => setArticleData(response.data))

 },[])


 const editArticleHandler = (articleId) => {
  navigate(`/edit-article/${articleId}`)

 }


 const deletArticleHandler =(articleId) =>{

  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your article has been deleted.",
        icon: "success"
      })
      axios.delete(`http://localhost:8000/articles/${articleId}`)
      navigate('/')

    }
  });
 
 }
  
  return(
    <>
    <MyNavbar/>
    <Container>
      <Row style={{marginTop:'70px'}}>
        <Col lg={8}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo corrupti laboriosam voluptatibus officiis omnis sunt fuga repellat perspiciatis. Quibusdam culpa quidem modi ullam ipsum error quam esse est architecto!
        </p>

        </Col>
        <Col lg={4} >
          <div className="articleCardContainer">
            <div className="cardHeader">
              <img src={articleData.image} />
              <h4>{articleData.title}</h4>
            </div>
            <div className="cardBody">
              <p>
                <BsPencilSquare size='20px'/>
                Writer: <b>{articleData.writer}</b>
              </p>

              <p>
                <BiTimeFive size='20px'/>
               Time: <b>{articleData.readingTime}</b>
              </p>

              <p>
                <BiCategoryAlt size='20px'/>
                Category: <b>{articleData.category}</b>
              </p>
            </div>
            <div className="cardFooter">
              <Button variant="outline-danger" onClick={ () =>deletArticleHandler(articleId)}><MdDelete size='25px'/>Delete Article</Button>

              <Link to={`/edit-article/${articleId}`}>
              <Button variant="outline-primary" ><MdOutlineEditCalendar size='25px' />Edit Article</Button>
              </Link>

            </div>
          </div>
        </Col >
      </Row>
    </Container>
    </>
  )
}
export default Article;