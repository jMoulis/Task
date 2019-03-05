import React from 'react';
import styled from '@emotion/styled';
import FormGroup from './FormGroup';

const InputText = styled.input`
  outline: none;
  padding: 0.5rem;
`;

export default props => (
  <FormGroup>
    <InputText {...props} />
  </FormGroup>
);
