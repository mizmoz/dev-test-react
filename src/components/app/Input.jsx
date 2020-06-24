
import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 5px 10px;
  width: 100%;
  max-width: 200px;
`;

const Input = ({ ...props }) => (
  <InputStyled {...props} />
);

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
