import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,192L48,160C96,128,192,64,288,37.3C384,11,480,21,576,58.7C672,96,768,160,864,197.3C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <Container>
          <Row>
            <Col>
            <p>column1</p>
            </Col>
            <Col>
            <p>column2</p>
            </Col>
            <Col>
            <p>column3</p>
            </Col>
          </Row>

        </Container>
      </footer>
    </>
  );
}
export default Footer;
