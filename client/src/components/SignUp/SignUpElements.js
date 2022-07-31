import styled from "styled-components";

export const SignUpForm = styled.div`
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(108 deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const FormWrapper = styled.div`
	// position: absolute;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 400px) {
		height: 80%;
		padding: 10px;
	}
`;

export const SignUpContainer = styled.div`
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	object-fit: cover;
	position: relative;
	z-index: 1;
	background-repeat: no-repeat;
`;

export const SignUpBg = styled.div`
	position: absolute;
`;
