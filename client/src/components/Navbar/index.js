import React from "react";
import { FaBars } from "react-icons/fa";
import MainLogo from "../assets/mood-logo.png";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

export const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<img src={MainLogo} alt="logo" width="150px" />
					</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/">My Mood</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/saved">My Month</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="services">Services</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">Login</NavBtnLink>
						<NavBtnLink to="addUser">Sign Up</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};
