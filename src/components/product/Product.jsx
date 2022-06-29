import "./product.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Product = ({ img, link, name }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='p' style={{ borderColor: darkMode && "#ffffff" }}>
      <div className='p-txt'>
        <h2>{name}</h2>
      </div>

      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
      </a>
    </div>
  );
};

export default Product;
