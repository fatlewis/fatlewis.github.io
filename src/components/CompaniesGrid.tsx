import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
	query CompaniesQuery {
		allEmploymentJson {
			nodes {
				id
				organisation
				start
				end
				logo_image {
					childImageSharp {
						gatsbyImageData(height: 64, placeholder: NONE)
					}
				}
				logo_bg_color
			}
		}
	}
`;

const CompaniesGrid = () => {
	const { allEmploymentJson } = useStaticQuery(query);
	const getBgColor = (node) => node.logo_bg_color ?? "white";
	return (
		<div className="flex flex-wrap justify-center">
			{allEmploymentJson.nodes.map(node => (
				<div key={node.id} className="w-full sm:w-1/2 lg:w-4/12 px-4 py-4">
					<div className="card bg-neutral shadow-xl">
						<figure className={`bg-${getBgColor(node)} dark:bg-${getBgColor(node)} px-16 py-8 min-h-32`}>
							<GatsbyImage image={getImage(node.logo_image)} alt={`${node.organisation} Logo`} height={32} />
						</figure>
						<div className="card-body p-6">
							<h2 className="card-title">{node.organisation}</h2>
							<p>{node.start} - {node.end}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CompaniesGrid;
