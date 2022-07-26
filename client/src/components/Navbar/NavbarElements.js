import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
background: #687b4e;
height: 80px;
display: flex;
justify-content: center;
align-items: center
font-size: 1rem;
position: sticky;
top: 0;
z-index:10;
max-width: 2200px;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
	justify-self: flex-start;
	height: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 24px;
	margin-top: 20px;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	text-align: center;
	padding: 0;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	// height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%
cursor: pointer;

&.active {
    border-bottom: 3px solid #fff;
}`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 30px;
	background: #d6de88;
	white-space: nowrap;
	padding: 10px 22px;
	color: #37704f;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin: 15px;

	&:hover {
		transition: all 0.2s ease-in-out:
		background: #fff;
		color: #01bf71;
	}
`;
