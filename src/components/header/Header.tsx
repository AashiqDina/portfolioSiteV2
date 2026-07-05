import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Hamburger from "../ui/Hamburger";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerTab } from "../../types";

const tabs: headerTab[] = [
	{ title: "Home", link: "/" },
	{ title: "Experience", link: "/" },
	{ title: "Education", link: "/" },
	{ title: "Projects", link: "/" },
	{ title: "Skills", link: "/" },
	{ title: "Settings", link: "/" },
];

type props = {
	hideHamburger: boolean;
};

export default function Header({ hideHamburger = false }: props) {
	const { theme } = useTheme();
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<header>
			{!hideHamburger && (
				<>
					<Hamburger
						theme={theme}
						open={menuOpen}
						onToggle={() => setMenuOpen((prev) => !prev)}
					/>

					<div className={`menu ${menuOpen ? "open" : "close"}`}>
						{tabs.map((tab) => {
							return (
								<Link
									className="tabTextLink"
									to={tab.link}
									key={tab.title + "-" + tab.link}
									aria-disabled={!menuOpen}
									tabIndex={menuOpen ? 0 : -1}
									style={
										{
											"--hover-background": theme.textHoverAnimation.background,
										} as React.CSSProperties
									}
								>
									<h2 className="tabText" style={theme.primaryText}>
										{tab.title}
									</h2>
								</Link>
							);
						})}
					</div>
				</>
			)}
			{hideHamburger && <div></div>}
			<Link to={"/"}>
				<h1 className="HeaderTitle" style={theme.primaryText}>
					Aashiq Dina
				</h1>
			</Link>
		</header>
	);
}
