import { createContext, useCallback, useState } from "react";
import axios from "axios";

const navBarContext = createContext();

function Provider({ children }) {
  const [navBarItems, setNavBarItems] = useState([]);

  const fetchNavBarItems = useCallback(async () => {
    const response = await axios.get("http://localhost:3005/navbar");
    setNavBarItems(response.data);
  }, []);

  const valueToShare = {
    navBarItems,
    fetchNavBarItems,
  };

  return (
    <navBarContext.Provider value={valueToShare}>
      {children}
    </navBarContext.Provider>
  );
}

export { Provider };
export default navBarContext;
