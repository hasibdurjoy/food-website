import React from "react";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import useCourses from "../../hooks/useCourses.js";
import Course from "../course/Course.js";
import bgImage from "./../../assets/images/sectionBg.png";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Bounce left cascade>
          <h2 className="text-center text-white mb-0">Our All Courses</h2>
        </Bounce>
        <Bounce right cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Buy authentic foods and get a fast delivery for your desire food.
          </p>
        </Bounce>
        <Row>
          {courses?.map((course) => (
            <Course course={course} id={course.id}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
