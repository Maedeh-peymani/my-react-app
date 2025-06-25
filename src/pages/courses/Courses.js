import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Accordion, Form, Container, Row, Col } from "react-bootstrap";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Alert from "react-bootstrap/Alert";
import "./Courses.css";
import CourseItem from "../../components/course/CourseItem";
import { FaFilter } from "react-icons/fa";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");

  useEffect(() => {
    if (sortType === "earliest") getCoursesByOredr("desc", "id");
    else if (sortType === "latest") getCoursesByOredr("asc", "id");
    else if (sortType === "expensive") getCoursesByOredr("desc", "mainPrice");
    else if (sortType === "cheape") getCoursesByOredr("asc", "mainPrice");
  }, [sortType]);

  useEffect(() => {
    if (category === "frontend") getCoursesByCategory("Front-end Development");
    else if (category === "backend") getCoursesByCategory("Backend Development");
  }, [category]);

  useEffect(() => {
    if (courseState === "completed") getCoursesByState("completed");
    else if (courseState === "presell") getCoursesByState("presell");
    else if (courseState === "recording") getCoursesByState("recording");
  }, [courseState]);


  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getCoursesByOredr = (order, column) => {
    axios
      .get(
        `http://localhost/react/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const getCoursesByCategory = (category) => {
    axios
      .get(`http://localhost/react/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };

  const getCoursesByState = (state) => {
    axios
      .get(`http://localhost/react/react/api/courses/?state=${state}`)
      .then((response) => setCourses(response.data.data));
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/react/api/courses/?search=${searchKey}&column=writter`
      )
      .then((response) => setCourses(response.data.data));
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const courseStateHandler = (e) => {
    setCourseState(e.target.value);
  }

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>Courses List</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              className="searchInput"
              onChange={searchInputHandler}
            />
            <button className="searchButton" onClick={searchButtonHandler}>
              Search
            </button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>Sorting</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      name="sort"
                      label="Latest"
                      id="earliest"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      label="Oldest"
                      id="latest"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      label="The most expensive"
                      id="expensive"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      label="The cheapest"
                      id="cheape"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterWrapper">
              <div className="filterIcon">
                <MdCategory size="20px" />
                <b>Category</b>
                <Form>
                  <Form.Check
                    type="checkbox"
                    value="frontend"
                    label="Frontend"
                    onChange={categoryHandler}
                    checked={category === "frontend" ? true : false}
                  />
                  <Form.Check
                    type="checkbox"
                    value="backend"
                    label="Backend"
                    onChange={categoryHandler}
                    checked={category === "backend" ? true : false}
                  />
                </Form>
              </div>
            </div>
            <div className="filterWrapper">
              <div className="filterIcon">
                <FaFilter />
                <b>Course Status</b>
                <Form>
                  <Form.Check
                    type="switch"
                    value="completed"
                    label="Completed"
                    onChange={courseStateHandler}
                    checked={courseState === "completed" ? true : false}
                  />
                  <Form.Check
                    type="switch"
                    value="presell"
                    label="Presale"
                    onChange={courseStateHandler}
                    checked={courseState === "presell" ? true : false}
                  />{" "}
                  <Form.Check
                    type="switch"
                    value="recording"
                    label="In progress"
                    onChange={courseStateHandler}
                    checked={courseState === "recording" ? true : false}
                  />
                </Form>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4 py-3">
              {courses.map((course) => (
                <Col key={course.id}>
                  <CourseItem {...course} />
                </Col>
              ))}
            </Row>

            {courses.length === 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                <p>No Course Found!!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Courses;
