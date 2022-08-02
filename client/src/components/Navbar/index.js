import React from "react";
import { FaBars } from "react-icons/fa";
import MainLogo from "../assets/mood-logo.png";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/mood-tracker">
						<img src={MainLogo} alt="logo" width="110px" />
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/mood-tracker/mood">My Mood</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/mood-tracker/week">My Week</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/mood-tracker/services">Services</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/mood-tracker/login">Login</NavBtnLink>
						<NavBtnLink to="/mood-tracker/signup">Sign Up</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
