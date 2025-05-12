import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query LanguagesTableQuery {
		allLanguagesJson {
			nodes {
				id
				name
				libraries {
					name
				}
			}
		}
	}
`;

const LanguagesTable = () => {
	const data = useStaticQuery(query);
	return (
		<div className="overflow-x-auto p-8">
			<table className="table">
				<thead className="text-stone-200">
					<tr>
						<th className="text-center">Language</th>
						<th className="text-center">Libraries</th>
					</tr>
				</thead>
				<tbody>
					{data.allLanguagesJson.nodes.map(node => (
						<tr key={node.id}>
							<td className="text-center">{node.name}</td>
							<td className="text-center">{node.libraries.map(({ name }) => name).join(", ")}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default LanguagesTable;

