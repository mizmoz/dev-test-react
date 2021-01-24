import styled from 'styled-components';

const ErrorWrapper = styled.div`
    padding: 36px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

const ErrorMessage = styled.div`
    color: #fff;
    font-family: ${props => props.theme.baseFontFamily};
    margin-bottom: ${props => props.theme.margin};
`;

export {
    ErrorWrapper,
    ErrorMessage
};