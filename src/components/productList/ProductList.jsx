import "./productList.css";
import Product from "../product/Product";
// import kalm from "../../img/homenstay.png"
 import { products } from "../../data";



const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects.</h1>
        <p className="pl-desc">
          Below are the few projects i have designed through out my learning process, implementing React.js,React-native, React-redux, nodejs, Next.js, tailwind css and more.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
