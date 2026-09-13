import { useEffect, useState } from "react"
import agent from "./api/agent";

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([]);

  useEffect(() => {
    agent.Catalog.list()
    .then((data) => {
      console.log("data Go:", data);
      setProducts(data);
    })
    .catch((error) => console.error("error call API:", error));
  }, [])

const addProduct = () => {
  setProducts(prevState => [...prevState, {name: 'Máy lọc nước' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
}

  return (
    <div>
      <h1 style={{color: 'blue'}}>Điện Máy Lộc</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'})}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App 
