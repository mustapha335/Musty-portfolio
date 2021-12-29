import "./product.css";

const Product = ({img,link,name}) => {
  return (
    
    <div className="p">
     <div className="p-txt">
      <h2>{name}</h2>
      </div>
      {/* <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div> */}
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        
      </a>
      
    </div>
    
  );
};

export default Product;
