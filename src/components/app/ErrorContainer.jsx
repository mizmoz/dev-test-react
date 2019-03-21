
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.div`
    border: 1px solid ${style('color.error')};
    color: ${style('color.error')};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
    margin: 20px 0;
    border-radius: 5px;
`;
