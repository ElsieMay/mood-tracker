import { SignUpBg, SignUpContainer } from "./SignUpElements";
import Background from "../assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";
import "../assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";

const HeroSignUp = () => {
	return (
		<>
			<SignUpContainer>
				<SignUpBg>
					<img src={Background} alt="Logo" height="1900" />
				</SignUpBg>
			</SignUpContainer>
		</>
	);
};

export default HeroSignUp;
