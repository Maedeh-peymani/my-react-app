import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";






function EditArticle(){


  const articleId  =useParams().articleId;
  const[articleData, setArticleData] = useState({});


  useEffect(() => {
     axios.get(`http://localhost:8000/articles/${articleId}`)
     .then (response => setArticleData(response.data))
   },[])


  const editArticleHandler = () => {
    axios.put(`http://localhost:8000/articles/${articleId}`,articleData)
    Swal.fire({
      title: 'Your article has been edited successfully!',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
     
  }

  const formHandler = (e) => {
    setArticleData({...articleData ,[e.target.name]: e.target.value})
  }

  return(
    <>
    <MyNavbar/>
    <div className="formContainer">
    <Form>
         <Form.Group className="mb-3">
         <Form.Label>Article Title</Form.Label>
         <Form.Control 
         value = {articleData.title}
         name="title"
         onChange={formHandler}
         type="text" placeholder="Please Enter Article Title" />
         </Form.Group>
 
         <Form.Group className="mb-3">
         <Form.Label>Short explanation</Form.Label>
         <Form.Control 
         value = {articleData.desc}
         name="desc"
         onChange={formHandler}
         type="text" placeholder="" />
         </Form.Group>
 
         <Form.Group className="mb-3">
         <Form.Label>Writer</Form.Label>
         <Form.Control 
         value = {articleData.writer}
         name="writer"
         onChange={formHandler}
         type="text" placeholder="" />
         </Form.Group>
 
         <Form.Group className="mb-3">
         <Form.Label>Article Topic</Form.Label>
         <Form.Control 
         value = {articleData.category}
         name="category"
         onChange={formHandler}
         type="text" placeholder="" />
         </Form.Group>
 
         <Form.Group className="mb-3">
         <Form.Label>Image Article </Form.Label>
         <Form.Control 
         value = {articleData.image}
         name="image"
         onChange={formHandler}
         type="text" placeholder="" />
         </Form.Group>
 
         <Form.Group className="mb-3">
         <Form.Label>Time of reading</Form.Label>
         <Form.Control
         value = {articleData.readingTime}
         name="readingTime"
         onChange={formHandler}
         type="number" placeholder="" />
         </Form.Group>
 
       <Button  onClick={editArticleHandler} variant="primary" type="button">
        Edit Article
       </Button>
     </Form>
    </div>
    </>
   )
 }

export default EditArticle;