import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import useCourses from "../../hooks/useCourses.js";

const CourseDetails = () => {
  const [courses] = useCourses();
  const { addToCart } = useAuth();
  const { id } = useParams();
  const newSelected = courses?.find((course) => course.id === Number(id));

  return (
    <div className="my-5">

    </div>
  );
};
export default CourseDetails;
