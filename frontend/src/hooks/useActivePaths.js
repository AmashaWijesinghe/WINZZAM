import { useState } from "react";

const UseActivePaths = () => {
  const [activePaths, setActivePaths] = useState([]);

  const handleNavLinkType = (path) => {

    switch (path) {
      case "/panel_members":
        setActivePaths(["/panel_members", "/add_panel_members"]);
        break;
      default: setActivePaths([path]); break;
    }

  };

  return { activePaths, handleNavLinkType };
};

export default UseActivePaths;