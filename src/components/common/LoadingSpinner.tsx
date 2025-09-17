import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.background.dark};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const Spinner = styled.div`
	border: 8px solid ${(props) => props.theme.colors.background.light};
	border-top: 8px solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: ${rotate} 1.5s linear infinite;
`;

const LoadingSpinner = () => {
	return (
		<SpinnerOverlay>
			<Spinner />
		</SpinnerOverlay>
	);
};

export default LoadingSpinner;
