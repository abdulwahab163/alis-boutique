import React from 'react';
import { Nav, Tab, Modal, Button } from 'react-bootstrap';
import ContainerPrimary from '../../../components/Container';
import DescriptionSection from './DescriptionSection';
import ReviewsSection from './ReviewsSection';
import Rating from 'react-rating';

const DetailTabs = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='nav flex-column gap-3'>
            <li>
              <textarea
                rows='4'
                placeholder='Feed back here...'
                className='form-control'
              />
            </li>
            <li>
              <label className='mb-1'>Give some rating</label>
              <div className='text-warning fs-2'>
                <Rating
                  emptySymbol='mdi mdi-star-outline'
                  fullSymbol='mdi mdi-star'
                />
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-primary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <section className='detail-tabs-section mb-5 pb-3'>
        <div>
          <ContainerPrimary>
            <Tab.Container defaultActiveKey='review'>
              <div>
                <Nav variant='pills' className='gap-4 justify-content-center '>
                  <Nav.Item>
                    <Nav.Link
                      className='btn py-3 px-5 btn-primary-1 rounded-pill'
                      eventKey='review'
                    >
                      Reviews (2)
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Tab.Container>
          </ContainerPrimary>
        </div>
      </section>
    </>
  );
};

export default DetailTabs;
