
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelStyled = styled.label`
  display: block;
  margin: 10px 0;
`;

const SpanStyled = styled.span`
  font-size: 12px;
`;

const Label = ({ label, children, ...props }) => (
  <LabelStyled {...props}>
    <SpanStyled>{label}</SpanStyled>
    <div>
      {children}
    </div>
  </LabelStyled>
);

Label.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  label: '',
  children: null,
};

export default Label;
