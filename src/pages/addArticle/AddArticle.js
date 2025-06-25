import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css';
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle(){
  const [formData, setFormData] = useState({})

  const resetFormData =() =>{
    setFormData({
      title: '',
      description: '',
      image: '',
      writter: '',
      readingTime:'',
      category:''
    })

  }
  const addArticleHandler = () => {
    axios.post("http://localhost/react/react/api/articles/", formData)
    .then(response => {
      if(response.status=== 200){
        Swal.fire({
          title: 'Your article has been created successfully!',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      }
      })
    .catch(error => {
      Swal.fire({
         title: 'Failed to create the new article',
          timer: 2000,
          icon: 'error',
          timerProgressBar: true,
          showConfirmButton: false,
      })
    })
    resetFormData();

  }

  const formHandler = (e) => {
    setFormData({...formData ,[e.target.name]: e.target.value})
   }

  

  return(
   <>
   <MyNavbar/>
   <div className="formContainer">
   <Form>
        <Form.Group className="mb-3">
        <Form.Label>Article Title</Form.Label>
        <Form.Control 
        value = {formData.title}
        name="title"
        onChange={formHandler} type="text" placeholder="Please Enter Article Title" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Short explanation</Form.Label>
        <Form.Control 
        value = {formData.description}
        name="description"
        onChange={formHandler} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Writer</Form.Label>
        <Form.Control 
        value = {formData.writter}
        name="writer"
        onChange={formHandler} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Article Topic</Form.Label>
        <Form.Control 
        value = {formData.category}
        name="category"
        onChange={formHandler} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Image Article </Form.Label>
        <Form.Control 
        value = {formData.image}
        name="image"
        onChange= {formHandler} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Time of reading</Form.Label>
        <Form.Control
        value = {formData.readingTime}
        name="readingTime"
        onChange={formHandler} type="number" placeholder="" />
        </Form.Group>

      <Button onClick={addArticleHandler} variant="primary" type="button">
        Create Article
      </Button>
    </Form>
   </div>
   </>
  )
}
export default AddArticle;