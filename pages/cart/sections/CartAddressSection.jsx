import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CountrySelect from 'react-bootstrap-country-select';

const CartAddress = ({ validated, onSubmit }) => {
  const [value, setValue] = React.useState(null);

  const list = [
    { label: 'First name', type: 'text' },
    { label: 'Last name', type: 'text' },
    { label: 'Address', type: 'text' },
    { label: 'City', type: 'text' },
    { label: 'Postal Code / ZIP', type: 'text' },
    { label: 'Phone number', type: 'text' },
    { label: 'Country', isCountry: true },
    { label: 'E-mail', type: 'email' },
  ];

  return (
    <section>
      <div>
        <div>
          <Row className='mb-5 gy-3'>
            {list.map((item) => (
              <Form.Group as={Col} md='6' controlId='validationCustom01'>
                <Form.Label>{item.label}</Form.Label>
                {item.isCountry ? (
                  <CountrySelect value={value} onChange={setValue} />
                ) : (
                  <Form.Control required type='text' placeholder={item.label} />
                )}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid.
                </Form.Control.Feedback>
              </Form.Group>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default CartAddress;
