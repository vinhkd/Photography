/**
 *
 * SignUp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import LogoHeader from 'components/LogoHeader';
import FormAccount from './FormAccount';

const SingUpWrapper = styled.div`
  max-width: calc(1440px + 16px * 2);
  background-color: #ffffff;
`;

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.Component {
  render() {
    return (
      <div>
        <SingUpWrapper>
          <Helmet>
            <title>SignUp</title>
            <meta name="description" content="Description of SignUp" />
          </Helmet>
          <LogoHeader />
          <FormAccount />
        </SingUpWrapper>
      </div>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUp);
