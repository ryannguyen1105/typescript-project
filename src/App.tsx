import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([]);

  useEffect(() => {
    fetch('https://eloc-auth.onrender.com/users')
    .then(response => response.json())
    .then(data => setProducts(data))
  }
)

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
