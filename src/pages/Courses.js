import { Container, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Course from "../components/course/Course.js";
import sectionBG from "./../assets/images/sectionBg.png";
import useAuth from "./../hooks/useAuth.js";

const Courses = () => {
  const { courses, totalPage, currentPage, setCurrentPage } = useAuth();

  function pageHandler(number) {
    setCurrentPage(number);
  }

  return (
    <div className="py-5" style={{ background: `url(${sectionBG})` }}>
      <div className="text-center text-white">
        <Slide left>
          <h1>
            {" "}
            We are offering you within{" "}
            <span className="text-danger">One Hour</span> delivery <br /> any
            kind of foods{" "}
          </h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            Here you can find our all latest foods. Choose some of them and try
            to eat your lunch or dinner.
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          {[...Array(totalPage).keys()].map((number) => (
            <button
              onClick={() => pageHandler(number)}
              key={number}
              className={
                number === currentPage
                  ? "btn btn-danger rounded-4 border"
                  : "btn  text-white rounded-0 "
              }
            >
              {number + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
