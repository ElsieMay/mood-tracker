import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

/* Styling for sidebar Container */
export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #687b4e;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

/* Styling close icon */
export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

/* Styling for sidebar wrapper */
export const SidebarWrapper = styled.div`
	color: #fff;
`;

/* Styling for sidebar menu */
export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
`;

/* Styling for sidebar navigation links */
export const SidebarLink = styled(LinkR)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	text-decoration: none;
	list-style: none;
    transition 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #678a88;
        transition: 0.2s ease-in-out;
    }`;

/* Styling for sidebar button wrapper */
export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
`;

/* Styling for sidebar login and sign up routes */
export const SidebarRoute = styled(LinkR)`
	border-radius: 30px;
	background: #d6de88;
	white-space: nowrap;
	padding: 10px 22px;
	margin: 8px;
	color: #37704f;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		color: #678a88;
		background: #f2f9f4;
		transition: all 0.2s ease-in-out;
	}
`;
