import styled from 'styled-components';

const TextBlock = styled.p`
	font-size: 1.1rem;
	line-height: 1.8;
	color: ${(props) => props.theme.colors.text.dark};
	text-align: center;
	max-width: 800px;
	margin: 0 auto;
`;

export default TextBlock;
