import React, { useState } from "react";
import { Nav, Tab, Modal, Button } from "react-bootstrap";
import Rating from "react-rating";

import ContainerPrimary from "../../../components/Container";
import ReviewsSection from "./ReviewsSection";

const DetailTabs = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedBack, setFeedBack] = useState("");

  const handleClose = () => {
    console.log("rating", rating);
    console.log("feedBack", feedBack);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="nav flex-column gap-3">
            <li>
              <div className="text-warning d-flex justify-content-center fs-2">
                <Rating
                  emptySymbol="mdi mdi-star-outline"
                  fullSymbol="mdi mdi-star"
                  initialRating={rating}
                  onChange={(value) => setRating(value)}
                />
              </div>
            </li>
            <li>
              <textarea
                placeholder="Your feed back here..."
                className="form-control"
                rows="4"
                style={{ resize: "none" }}
                value={feedBack}
                onChange={(e) => setFeedBack(e.target.value)}
              />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <section className="detail-tabs-section mb-5 pb-3">
        <div>
          <ContainerPrimary>
            <Tab.Container defaultActiveKey="review">
              <div>
                <Nav variant="pills" className="gap-4 justify-content-center ">
                  <Nav.Item>
                    <Nav.Link
                      onClick={handleShow}
                      className="btn py-3 px-5 btn-primary-1 rounded-pill"
                    >
                      Add Review
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="btn py-3 px-5 btn-primary-1 rounded-pill"
                      eventKey="review"
                    >
                      Reviews (2)
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <ReviewsSection />
            </Tab.Container>
          </ContainerPrimary>
        </div>
      </section>
    </>
  );
};

export default DetailTabs;
