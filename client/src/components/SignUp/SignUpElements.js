import styled from "styled-components";

export const FormContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: linear-gradient(108 deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const FormWrapper = styled.div`
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

export const FormContent = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: auto%;
	background: #687b4e;
	max-width: 400px;
	width: 100%;
	margin: 0 auto;
	padding: 60px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	z-index: 1;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
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
