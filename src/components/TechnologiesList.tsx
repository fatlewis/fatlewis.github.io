import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query TechnologiesListQuery {
		allTechnologiesJson {
			nodes {
				id
				name
			}
		}
	}
`;

const TechnologiesList = () => {
	const { allTechnologiesJson } = useStaticQuery(query);
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{allTechnologiesJson.nodes.map(node => (
				<div key={node.id} className="badge badge-neutral">{node.name}</div>
			))}
		</div>
	);
}

export default TechnologiesList;

