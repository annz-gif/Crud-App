import ProductsList from "@/components/ProductsList";



export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const { products } = await res.json();

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
