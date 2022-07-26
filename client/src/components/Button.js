import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#fff" : "#d6de88")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#37704f" : "#fff")};
	font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;

	&:hover {
		transition: all 0.3s ease-in-out;
		background: ${({ primary }) => (primary ? "#d6de88" : "#fff")};
	}
`;
