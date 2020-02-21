import styled from 'styled-components';

interface OverlayProps {
  isRejected?: boolean;
}

interface CameraWrapperProps extends OverlayProps {
  imageSource?: string;
}

export const Title = styled.h2`
  height: 24px;
  width: 282px;
  color: #000000;
  font-family: Roboto;
  font-size: 21px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  left: 50%;
`;

export const Text = styled.p`
  height: 48px;
  width: 314px;
  color: #000000;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding-bottom: 27px;
`;

export const OverlayLabel = styled.p`
	height: 12px;
	width: 67px;
	color: #FFFFFF;
	font-family: Roboto;
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 0.75px;
	line-height: 12px;
  text-align: right;
`

export const CameraWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 179px;
  width: 289px;
  border: ${(props:CameraWrapperProps) => 
    props.isRejected 
      ? '2px solid #C00000'
      : '2px solid #69CC8B'
  };
  border-radius: 18px;
  background-image: ${(props:CameraWrapperProps) => 
    `url(${props.imageSource})`
  };
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
	height: 30px;
	width: 105px;
	border-radius: 4px;
  background-color: ${(props:OverlayProps) => props.isRejected ? '#C00000' : '#69CC8B'};
  align-items: center;
  position: absolute;
  bottom: -15px;
  right: 30px;
`;

export const OverlayWrapper = styled.div`
  position: relative;
`;



