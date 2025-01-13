import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		allEmploymentJson {
			nodes {
				id
				organisation
				start
				end
				title
				location
				description
			}
		}
	}
`;

const EmploymentAccordion = () => {
	const { allEmploymentJson } = useStaticQuery(query);
	return (
		<>
			{allEmploymentJson.nodes.map((employment, index) => (
				<div id={employment.id} className="collapse collapse-arrow bg-base-200 my-2">
					<input type="radio" name="employment-accordion" /> 
					<div className="collapse-title flex">
						<div className="flex-1">
							<p className="font-semibold">{employment.organisation}</p>
						</div>
						<div>
							<p className="text-sm">{employment.title}</p>
							<p className="text-xs">{employment.start} - {employment.end}</p>
						</div>
					</div>
					<div className="collapse-content">
						<p className="my-4">{employment.description}</p>
					</div>
				</div>
			))}
		</>
	)
}

export default EmploymentAccordion;
