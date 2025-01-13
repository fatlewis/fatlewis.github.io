import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import LanguagesTable from "../components/LanguagesTable";
import TechnologiesList from "../components/TechnologiesList";
import CompaniesGrid from "../components/CompaniesGrid";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<div className="hero bg-base-200 min-h-[calc(100vh-4rem)]">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<StaticImage className="max-w-md rounded-lg shadow-2xl" src="../images/ai_b&w_office_02.jpeg" alt="A Software Engineer at work" />
					<div className="px-8">
						<h1 className="text-5xl font-bold">Hello.</h1>
      						<p className="pt-6">
							My name is Matthew Lewis, and I have worked as a professional software
							engineer since 2011.
						</p>
						<p className="pt-3">
							Listed below are languages I know, technologies in which I am
							proficient and businesses for whom I have been employed.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-base-100 pb-4">
				<h3 className="p-4 text-xl font-semibold">Languages</h3>
				<LanguagesTable />
				<h3 className="p-4 text-xl font-semibold">Technologies</h3>
				<TechnologiesList />
			</div>
			<div className="bg-base-200 pb-4">
				<h3 className="p-4 text-xl font-semibold">Employment</h3>
				<CompaniesGrid />
			</div>
		</Layout>
	);
}

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home Page" />;
