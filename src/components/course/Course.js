import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import Zoom from "react-reveal/Zoom";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Course = ({ course }) => {
  const history = useHistory();
  const { _id, img, title, desc, price, rating, ratingCount } = course;

  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  return (
    <Col sm={12} md={6} lg={4}>
      <Zoom>
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "21rem" }}>
            <Card.Img variant="top" style={{ minHeight: "220px" }} src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{title.slice(0, 25)}</Card.Title>
              <Card.Text>{desc.slice(0, 50)}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {price}$</h4>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <Row>
                <Col>
                  <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={emptyStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={fullStar}
                      />
                    }
                  />
                  <span>{rating}</span>
                </Col>
                <Col>Total review {ratingCount}</Col>
              </Row>
            </Card.Body>
            <Card.Body className="d-flex">
              <NavLink
                to={`/services/${_id}`}
                className="btn btn-danger w-100 me-1"
              >
                Order Food
              </NavLink>

            </Card.Body>
          </Card>
        </div>
      </Zoom>
    </Col>
  );
};

export default Course;
