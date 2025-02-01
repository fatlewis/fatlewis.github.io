import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

const BurgerMenuIcon = () => (
	<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
);

const NavItems: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<>
			<li className="px-2"><Link className={`${pathname == "/" && "bg-base-100"}`} to="/">About Me</Link></li>
			<li className="px-2"><Link className={`${pathname == "/my-work/" && "bg-base-100"}`}to="/my-work">My Work</Link></li>
		</>
	);
}

const NavBar: React.FC = ({ children }) => {
	return (
		<div className="drawer">
			<input id="navigation-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className="navbar bg-base-300 w-full">
					<div className="flex-1 lg:hidden">
						<label
							htmlFor="navigation-drawer"
							aria-label="open navigation menu"
							className="btn btn-square btn-ghost absolute">
							<BurgerMenuIcon />
						</label>
						<span className="flex-1 text-xl text-center align-middle font-bold px-8"><Link to="/">Matthew Lewis</Link></span>
					</div>
					<div className="hidden flex-1 lg:flex">
							<Link className="absolute" to="/"><StaticImage src="../images/icon.png" alt="Icon for Matthew Lewis" height={48} /></Link>
							<div className="flex-1 text-center">
								<ul className="menu menu-horizontal">
									<NavItems />
								</ul>
							</div>
					</div>
				</div>
				{children}
			</div>
			<div className="drawer-side">
				<label
					htmlFor="navigation-drawer"
					aria-label="close navigation menu"
					className="drawer-overlay">
				</label>
				<ul className="menu bg-base-200 min-h-full w-80 p-4">
					<NavItems />
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
