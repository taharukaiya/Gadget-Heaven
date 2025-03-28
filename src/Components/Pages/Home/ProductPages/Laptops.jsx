import { useLoaderData } from "react-router";
import Card from "../../Home/ProductPages/Card";
const Laptops = () => {
  const products = useLoaderData().filter(
    (product) => product.category === "Laptops"
  );

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {products.map((product) => {
        return <Card key={product.product_id} product={product} />;
      })}
    </div>
  );
};

export default Laptops;
