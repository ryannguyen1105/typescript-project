import type { Product } from "../../app/models/product";

type Props = {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <>
    <ul>
        {products.map(item => (
          <li key={item.name}>{item.slug} - {item.price}
            {item.name} -{" "}
            {item.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
      </>
  )
}