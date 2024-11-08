// import { useContext } from "react";
// import navBarContext from "../context/navBar";
import NavBarItem from "./NavBarItem";
import Button from "./Button";

function NavBar({ navBarItems }) {
  //   const { navBarItems } = useContext(navBarContext);
  console.log(navBarItems);

  const handleNavBarItem = (e) => {
    console.log(e.target.id);
  };

  const mynavBarItems = navBarItems.map((item) => {
    return (
      <Button onClick={handleNavBarItem} id={item.id} key={item.id}>
        {item.title}
      </Button>
    );
  });

  return <div className="flex flex-wrap">{mynavBarItems}</div>;
}

export default NavBar;
