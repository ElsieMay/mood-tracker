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
					<SidebarLink to="/mood-tracker/mood">My Mood</SidebarLink>
					<SidebarLink to="/mood-tracker/month">My Month</SidebarLink>
					<SidebarLink to="/mood-tracker/services">Services</SidebarLink>
					<SideBtnWrap>
						<SidebarRoute to="/mood-tracker/login">Login</SidebarRoute>
						<SidebarRoute to="/mood-tracker/signup">Sign Up</SidebarRoute>
					</SideBtnWrap>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};
