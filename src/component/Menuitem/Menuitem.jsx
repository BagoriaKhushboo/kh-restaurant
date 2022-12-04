import "./Menuitem.css";
function Menuitem({menudata}) {
  return (
    <>
      <section className="maincard" >
        <div className="row">
        {menudata.map((ele)=>{
          const{id,name,description,image,category}=ele;//this is Destructuring
            return(
          <div className="col-md-4" key={id}>
            <div className="card-container">
              <div className="card ">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name} </h2>
                  <span className="card-description subtle">
                   {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img
                  src={image}
                  alt="images"
                  className="card-media"
                />

                <span className="card-tag  subtle">Order Now</span>
              </div>
            </div>
          </div>
          )})}
        </div>
      </section>
    </>
  );

}
export default Menuitem;
