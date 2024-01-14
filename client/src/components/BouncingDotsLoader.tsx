import styled from '@mui/material/styles/styled';

const StyledDiv = styled('div')`
	.bouncing-loader{
		display: flex;
		justify-content: center;
	}

	.bouncing-loader > div {
		width: 16px;
		height: 16px;
		margin: 3px 6px;
		border-radius: 50%;
		background-color: #ffffff;
		opacity: 1;
		animation: bouncing-loader 0.6s infinite alternate;
	}

	@keyframes bouncing-loader {
		to {
			opacity: 0.1;
			transform: translateY(-16px);
		}
	}

	.bouncing-loader > div:nth-child(2) {
		animation-delay: 0.2s;
	}

	.bouncing-loader > div:nth-child(3) {
		animation-delay: 0.4s;
	}
`



function BouncingDotsLoader() {
	return (
		<StyledDiv>
			<div className="bouncing-loader">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</StyledDiv >
	);
}

export default BouncingDotsLoader;