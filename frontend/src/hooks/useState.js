import { useState } from "react";

const useNavLinkHandler = () => {
	const [activeLink, setActiveLink] = useState("");

	const handleNavLinkClick = (path) => {
		setActiveLink(path);
	};

	return { activeLink, handleNavLinkClick };
};

export default useNavLinkHandler;
