import React from "react";
import Background from "../assets/pexels-kindel-media-8186284.mp4";
import { HeroContainer, HeroBackground, VideoBg } from "./HomePageElements.js";

export const Hero = () => {
	return (
		<>
			<HeroContainer>
				<HeroBackground>
					<VideoBg video loop muted autoPlay src={Background} type="video/mp4" />
				</HeroBackground>
			</HeroContainer>
		</>
	);
};
