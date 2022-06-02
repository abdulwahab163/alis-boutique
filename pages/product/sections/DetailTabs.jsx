import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import ContainerPrimary from '../../../components/Container';
import DescriptionSection from './DescriptionSection';
import ReviewsSection from './ReviewsSection';

const DetailTabs = () => {
  return (
    <section className='detail-tabs-section mb-5 pb-3'>
      <div>
        <ContainerPrimary>
          <Tab.Container defaultActiveKey='review'>
            <div>
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
              <div>
                <Tab.Content>
                  <Tab.Pane eventKey='description'>
                    <DescriptionSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey='review'>
                    <ReviewsSection />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default DetailTabs;
