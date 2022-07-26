import React from "react";
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu } from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="/">My Mood</SidebarLink>
					<SidebarLink to="/saved">My Month</SidebarLink>
					<SidebarLink to="services">Services</SidebarLink>
					<SideBtnWrap>
						<SidebarRoute to="/login">Login</SidebarRoute>
						<SidebarRoute to="addUser">Sign Up</SidebarRoute>
					</SideBtnWrap>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};
