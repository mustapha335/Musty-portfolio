import "./product.css";

const Product = ({ img, link, name }) => {
  return (
    <div className='p'>
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
