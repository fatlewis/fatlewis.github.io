import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
	return (
		<main className="min-h-screen flex flex-col bg-base-100">
			<div className="flex-1">
				<NavBar>
					<div className="max-w-screen-xl m-auto">
						{children}
					</div>
				</NavBar>
			</div>
			<Footer />
		</main>
	);
}

export default Layout;
