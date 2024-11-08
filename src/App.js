import { useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import navBarContext from "./context/navBar";

function App() {
  const { fetchNavBarItems, navBarItems } = useContext(navBarContext);

  useEffect(() => {
    fetchNavBarItems();
  }, []);

  return (
    <div>
      <NavBar navBarItems={navBarItems} />
      <p>Deco Deco</p>
    </div>
  );
}

export default App;
