import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import SearchBar from "../components/SearchBar";

import { fetchProducts } from "../services/api";

function Products() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [
    selectedProduct,
    setSelectedProduct
  ] = useState(null);

  useEffect(() => {

    const getProducts =
      async () => {

        try {

          const data =
            await fetchProducts();

          setProducts(data);

        } catch (err) {

          setError(
            "Something went wrong"
          );

        } finally {

          setLoading(false);

        }
      };

    getProducts();

  }, []);

  const filteredProducts =
    products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">

      <h1>Products</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">

        {filteredProducts.map(
          (product) => (

            <ProductCard
              key={product.id}
              product={product}
              openModal={
                setSelectedProduct
              }
            />

          )
        )}

      </div>

      <ProductModal
        selectedProduct={
          selectedProduct
        }
        closeModal={() =>
          setSelectedProduct(null)
        }
      />

    </div>
  );
}

export default Products;