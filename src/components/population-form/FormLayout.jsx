
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (min-width: 600px) {
      flex-wrap: no-wrap;
      flex-direction: row;
    }: 
`;


