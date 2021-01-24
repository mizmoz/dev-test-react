import styled from "styled-components";

export default styled.div`
  flex: 0 0 360px;
  background: url(src/assets/earth-lights.png) no-repeat left top;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media screen and (max-width: 576px) {
    flex: 1 0 auto;
    background: #05183b;
  }
}
`