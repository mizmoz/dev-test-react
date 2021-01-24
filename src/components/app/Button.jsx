
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const ButtonStyled = styled.button`
  background: ${props => !props.disabled ? props.theme.color[props.color]: props.theme.color['tertiary']};
  border-radius: ${style('radius')};
  box-shadow: ${style('shadow.small')};
  border: none;
  color: ${props => props.theme.color[`${props.color}Alt`]};

  cursor: pointer;
  display: inline-block;
  font-family: ${style('headerFontFamily')};
  font-size: ${style('fontSize.normal')};
  font-weight: ${style('buttonFontWeight')};
  line-height: ${style('fontSize.normal')};
  text-transform: uppercase;
  height: 48px;
  position: relative;
  text-decoration: none;
  outline: none;
`;

const Button = ({ label, ...props }) => (
  <ButtonStyled {...props}>
    {label}
  </ButtonStyled>
);

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

export default Button;
