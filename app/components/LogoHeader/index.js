/**
 *
 * LogoHeader
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import messages from './messages';
import LogoColor300 from '../../images/logo-color.png';
import LogoColor768 from '../../images/logo-color@2x.png';
import LogoColor1280 from '../../images/logo-color@3x.png';
// import PropTypes from 'prop-types';

const LogoStyled = styled.div`
  width: 112px;
  height: 26px;
  object-fit: contain;
`;
/* eslint-disable react/prefer-stateless-function */
class LogoHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <LogoStyled>
              <FormattedMessage {...messages.altMessage}>
                {altMessage => (
                  <img
                    src={LogoColor300}
                    srcSet={`${LogoColor300}, ${LogoColor768} 2x, ${LogoColor1280} 3x`}
                    alt={altMessage}
                  />
                )}
              </FormattedMessage>
            </LogoStyled>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

LogoHeader.propTypes = {};

export default LogoHeader;
