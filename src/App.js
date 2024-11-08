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
      <h1 className="text-3xl font-bold underline">Deco Deco</h1>
    </div>
  );
}

export default App;
