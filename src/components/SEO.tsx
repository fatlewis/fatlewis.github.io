import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<>
			<html lang="en" />
			<title>{title} | {data.site.siteMetadata.title}</title>
		</>
	);
};

export default SEO;
