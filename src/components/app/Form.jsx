import styled from 'styled-components';

const FormWrapper = styled.div`
    padding: 36px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

const Select = styled.select`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0 12px;
    background: #fff;
    border: none;
    outline: none;
`;

const Input = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0 16px;
    background: #fff;
    border: none;
    outline: none;
`;

const FormControl = styled.div`
    margin-bottom: 24px;
`;

const Form = styled.form``;

const Label = styled.label`
color: #fff;
font-family: ${props => props.theme.baseFontFamily};
font-size: 12px;
font-weight: bold;
text-transform: uppercase;
margin-bottom: 4px;
display: block;
`;

export {
    Form,
    FormWrapper,
    FormControl,
    Select,
    Input,
    Label
};