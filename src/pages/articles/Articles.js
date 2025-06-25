import MyNavbar from "../../components/navbar/MyNavbar";
import "./Articles.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Accordion, Form, Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Alert from 'react-bootstrap/Alert';


function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (sortType === "earliest") getArticlesByOredr("desc", "id");
    else if (sortType === "latest") getArticlesByOredr("asc", "id");
    else if (sortType === "longest") getArticlesByOredr("desc", "readingTime");
    else if (sortType === "shortest") getArticlesByOredr("asc", "readingTime");
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getArticlesByOredr = (order, column) => {
    axios
      .get(
        `http://localhost/react/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/react/api/articles/?search=${searchKey}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>Article List</h1>
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
                      label="Longest"
                      id="longest"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      label="Shortest"
                      id="shortest"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size="20px" />
                  <b>Categorization</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Article Categorization</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>

            {articles.length === 0 &&( 
               <Alert  variant='warning' className="py-3 gy-4 mt-2">
                <p>No Articles Found!!!</p>
              </Alert>) }
          
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Articles;
