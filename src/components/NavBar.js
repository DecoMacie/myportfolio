import { useState } from "react";
// import navBarContext from "../context/navBar";
import NavBarItem from "./NavBarItem";
import Button from "./Button";

function NavBar({ navBarItems }) {
  //   const { navBarItems } = useContext(navBarContext);
  const [navSelected, setNavSelected] = useState();

  // setNavSelected(() => {
  //   let a = "deco";
  //   console.log(a);
  //   return a;
  // });

  const handleNavBarItem = (id) => {
    setNavSelected(id);
    console.log(navSelected);
  };

  const mynavBarItems = navBarItems.map((item) => {
    return (
      <Button
        onClick={() => handleNavBarItem(item.id)}
        id={item.id}
        key={item.id}
      >
        {item.title}
      </Button>
    );
  });

  return <div className="flex flex-wrap">{mynavBarItems}</div>;
}

export default NavBar;
