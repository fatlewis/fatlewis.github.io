import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import EmploymentAccordion from "../components/EmploymentAccordion";

const MyWork: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h3 className="p-4 text-xl font-semibold">Previous Work</h3>
			<div className="mx-2">
				<EmploymentAccordion />
			</div>
		</Layout>
	);
}

export default MyWork;

export const Head: HeadFC = () => <SEO title="My Work" />;
