import React from "react";
import styled from "styled-components";
import { style } from '../../../configs/theme';

export const FormGroup = styled.div`
    display: block;
	width: auto;
    max-width: 400px;
	margin: 50px auto;
    padding: 20px 20px;
    border: 2px solid black;
    border-radius: 25px;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
	display: inline-block;

    font-family: ${style('headerFontFamily')};
    font-size: ${style('fontSize.normal')};
    font-weight: ${style('headerFontWeight')};
    line-height: ${style('fontSize.normal')};
    position: relative;
    text-decoration: none;
    margin-left: ${props => props.ml};
    margin-right:${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`;

export const Input = styled.input`
	padding: 0.5em;
	color: black;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const ErrorMessage = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

export const SuccessMessage = styled.label`
	margin-bottom: 0.5em;
	color: #109210;
    display: block;
`;
