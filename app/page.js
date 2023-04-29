import Poster from "./component/Poster";
import Product from "./component/Product";

// data fetching

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className="lg:max-w-7xl mx-auto bg-gray-100 relative">
      <Poster />
      <div className="bg-gray-50">
        <div className="absolute top-60 bg-white p-2 w-full">
          <h1 className="text-center">
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery
          </h1>
        </div>
        <div className="absolute top-80 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10 ">
          {data.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
