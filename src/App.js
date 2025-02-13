import { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import navBarContext from "./context/navBar";
import NavBarItem from "./components/NavBarItem";

function App() {
  const { fetchNavBarItems, navBarItems } = useContext(navBarContext);

  useEffect(() => {
    fetchNavBarItems();
  }, []);

  // const [navSelected, setNavSelected] = useState("nav_1");

  return (
    <div>
      <NavBar navBarItems={navBarItems} />
      {/* <NavBarItem item={navSelected} /> */}
    </div>
  );
}

export default App;
