import { useEffect, useState } from "react";
import agent from "../../api/agent";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list()
      .then((data) => {
        console.log("data Go:", data);
        setProducts(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error("error call API:", error));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        slug: "may-loc-nuoc" + (prevState.length + 1),
        sku: "MLN" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        updatedAt: new Date(),
      },
    ]);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Điện Máy Lộc</h1>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  );
}

export default App;
