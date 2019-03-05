import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const CheckBoxStyled = styled.input`
  outline: none;
`;

const CheckBox = ({ children, ...rest }) => (
  <FormGroup>
    <CheckBoxStyled {...rest} type="checkbox">
      {children}
    </CheckBoxStyled>
  </FormGroup>
);
CheckBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CheckBox.defaultProps = {
  children: null,
};
export default CheckBox;
