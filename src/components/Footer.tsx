import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
	return (
		<div className="bg-base-300 p-8 flex justify-center gap-4">
			<a href="https://www.linkedin.com/in/matt-j-lewis/"><StaticImage src="../images/LinkedIn_icon.svg" alt="LinkedIn" height={32} /></a>
			<a href="https://github.com/fatlewis"><StaticImage src="../images/icons8-github.svg" alt="GitHub" height={32} /></a>
		</div>
	)
}

export default Footer;

