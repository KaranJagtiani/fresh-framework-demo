import { useEffect, useState } from "preact/hooks";

export default function Table() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');  // Adjust the URL as necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length > 0) {
    return (
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={`bg-white border-b light:bg-gray-800 ${index === products.length - 1 ? 'border-b-0' : 'light:border-gray-700'}`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">
                  {product.name}
                </th>
                <td className="px-6 py-4">
                  {product.category}
                </td>
                <td className="px-6 py-4">
                  {product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
  }

  return (
    <div>
      <p className="px-6 py-4 font-bold text-xl tracking-wide text-gray-900 whitespace-nowrap light:text-white">loading...</p>
    </div>
  )

}