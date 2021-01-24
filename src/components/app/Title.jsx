import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyled = styled.div`
  color: ${props => props.light ? '#fff' : '#444'};
  height: 76px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  text-transform: uppercase;
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.normal};

  .material-icons {
    margin-right: ${props => props.theme.marginSmall};
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${props => props.light ? '#fff' : '#000'};
  margin: 0 16px;
`;

const Title = ({
  label,
  icon,
  light,
  ...otherProps
}) => {
  return (
    <>
      <TitleStyled light={light} {...otherProps}>
        {icon && <i className="material-icons">{icon}</i>}
        {label}
      </TitleStyled>
      <Divider light={light} />
    </>
  )
};

Title.propTypes = {
  light: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired
};

Title.defaultProps = {
  icon: null,
  light: false,
  label: ''
};

export default Title;