import { useState } from "react";
import Menuitem from "../../component/Menuitem/Menuitem";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import Menu from "../../component/menuApi";

// ... this is spread opertator uickly copy all or part of an existing array or object into another array or object.
// The spread operator is often used in combination with destructuring.

const menuCatList = [
  ...new Set(
    Menu.map((elem) => {
      // set is in java script is collection of unique values.
      return elem.category;
    })
  ),
"All",
];

console.log(menuCatList);

function Home() {
  const [menuData, setMenudata] = useState(Menu);
  const[menuList ,setmenuList]=useState(menuCatList);
  const filterItem = (cat) => {
    if(cat==='All'){
      setMenudata(Menu);
      return;
    }
    const updatedlist = Menu.filter((curele) => {
      return curele.category === cat;
    });
    setMenudata(updatedlist);
  };
  return (
    <>
      <div className="container">
        <Navbar filterItem={filterItem} menuList={menuList} />
        <Menuitem menudata={menuData} />
      </div>
    </>
  );
}
export default Home;
