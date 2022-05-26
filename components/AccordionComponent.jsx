import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionComponent = ({ title, children }) => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item
        className='border-0 border-bottom border-primary'
        eventKey='0'
      >
        <Accordion.Header>
          <span className='text-uppercase'>{title}</span>
        </Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
