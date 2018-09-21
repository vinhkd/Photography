/**
 *
 * Form
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import messages from './messages';
// import PropTypes from 'prop-types';

const FormAccountStyle = styled.div`
  width: 380px;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: solid 1px #e2e2e2;
  text-align: center;
  margin: auto;
`;

/* eslint-disable react/prefer-stateless-function */
class FormAccount extends React.Component {
  render() {
    return (
      <div>
        <FormAccountStyle>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </FormAccountStyle>
      </div>
    );
  }
}

FormAccount.propTypes = {};

export default FormAccount;
