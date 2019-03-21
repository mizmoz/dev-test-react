
import styled from 'styled-components';

const getAnimationDelay = (position) => {
  return ((0.91 + (position  * 0.16)) + "s");
}

export default styled.div`
  position:absolute;
  top:0;
  left: ${props => (props.position * 29 + "px")};
  background-color:rgb(0,0,0);
  width:28px;
  height:28px;
  animation-name:bounce_loader;
    -o-animation-name:bounce_loader;
    -ms-animation-name:bounce_loader;
    -webkit-animation-name:bounce_loader;
    -moz-animation-name:bounce_loader;
  animation-duration:1.5s;
    -o-animation-duration:1.5s;
    -ms-animation-duration:1.5s;
    -webkit-animation-duration:1.5s;
    -moz-animation-duration:1.5s;
  animation-iteration-count:infinite;
    -o-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
  animation-direction:normal;
    -o-animation-direction:normal;
    -ms-animation-direction:normal;
    -webkit-animation-direction:normal;
    -moz-animation-direction:normal;
  transform:scale(.3);
    -o-transform:scale(.3);
    -ms-transform:scale(.3);
    -webkit-transform:scale(.3);
    -moz-transform:scale(.3);
  border-radius:19px;
    -o-border-radius:19px;
    -ms-border-radius:19px;
    -webkit-border-radius:19px;
    -moz-border-radius:19px;
  animation-delay:${props => (getAnimationDelay(props.position))};
		-o-animation-delay:${props => (getAnimationDelay(props.position))};
		-ms-animation-delay:${props => (getAnimationDelay(props.position))};
		-webkit-animation-delay:${props => (getAnimationDelay(props.position))};
		-moz-animation-delay:${props => (getAnimationDelay(props.position))};
  
  @keyframes bounce_loader{
    0%{
    transform:scale(1);
      background-color:rgb(0,0,0);
    }

    100%{
    transform:scale(.3);
      background-color:rgb(255,255,255);
    }
  }

  @-o-keyframes bounce_loader{
    0%{
    -o-transform:scale(1);
      background-color:rgb(0,0,0);
    }

    100%{
    -o-transform:scale(.3);
      background-color:rgb(255,255,255);
    }
  }

  @-ms-keyframes bounce_loader{
    0%{
    -ms-transform:scale(1);
      background-color:rgb(0,0,0);
    }

    100%{
    -ms-transform:scale(.3);
      background-color:rgb(255,255,255);
    }
  }

  @-webkit-keyframes bounce_loader{
    0%{
    -webkit-transform:scale(1);
      background-color:rgb(0,0,0);
    }

    100%{
    -webkit-transform:scale(.3);
      background-color:rgb(255,255,255);
    }
  }

  @-moz-keyframes bounce_loader{
    0%{
    -moz-transform:scale(1);
      background-color:rgb(0,0,0);
    }

    100%{
    -moz-transform:scale(.3);
      background-color:rgb(255,255,255);
    }
  }
`;