import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import FormGroup from './FormGroup';

const SelectBox = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem;
`;

const SelectBoxGroup = ({ children, ...rest }) => (
  <FormGroup>
    <SelectBox {...rest}>{children}</SelectBox>
  </FormGroup>
);

SelectBoxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SelectBoxGroup.defaultProps = {
  children: null,
};

export default SelectBoxGroup;
