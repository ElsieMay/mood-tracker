import React, { useState } from "react";
import Background from "../assets/pexels-kindel-media-8186284.mp4";
import { HeroContainer, HeroBackground, VideoBg, HeroText, HeroBtnWrapper, HeroTitle, HeroP, ArrowForward, ArrowRight } from "./HomePageElements.js";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

export const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<HeroContainer>
				<HeroBackground>
					<VideoBg autoPlay loop muted src={Background} type="video/mp4" />
				</HeroBackground>
				<HeroText>
					<HeroTitle>How is your mood today?</HeroTitle>
					<HeroP>Take note of your moods daily, to keep track of your mental health.</HeroP>
					<HeroBtnWrapper>
						<NavLink to="/mood-tracker/signup">
							<Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
								Begin your journey{hover ? <ArrowForward /> : <ArrowRight />}
							</Button>
						</NavLink>
					</HeroBtnWrapper>
				</HeroText>
			</HeroContainer>
		</>
	);
};
