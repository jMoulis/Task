import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import FormGroup from './FormGroup';

const TextArea = styled.textarea`
  outline: none;
`;

const TextAreaGroup = ({ children, ...rest }) => (
  <FormGroup>
    <TextArea {...rest}>{children}</TextArea>
  </FormGroup>
);

TextAreaGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextAreaGroup.defaultProps = {
  children: null,
};

export default TextAreaGroup;
