import "./Navbar.css";
function Navbar({ filterItem, menuList}) {
  return (
    <>
      <nav className="nav_bar">
            <div className="logo"><img src="https://png.pngtree.com/png-clipart/20221110/original/pngtree-health-restaurant-logo-design-template-vector-picture-image_3607709.png" alt="" /></div>
        <div className="btn-group">
          {menuList.map((elem) => {
            return (
              <button  key={elem}
                className="btn-group__item"
                onClick={() => filterItem(elem)}
              >
               {elem}
              </button>
            );
          })}

          {/* <button className="btn-group__item"onClick={()=>filterItem('lunch')}>Lunch</button> 
              <button className="btn-group__item"onClick={()=>filterItem('dinner')}>Dinner</button> 
              <button className="btn-group__item">All</button>  */}
        </div>
        <div className="logo"><img src="https://png.pngtree.com/png-clipart/20221110/original/pngtree-health-restaurant-logo-design-template-vector-picture-image_3607709.png" alt="" /></div>
      </nav>
    </>
  );
}
export default Navbar;
