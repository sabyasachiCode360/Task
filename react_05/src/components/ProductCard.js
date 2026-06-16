function ProductCard({
  product,
  openModal
}) {
  return (
    <div
      className="product-card"
      onClick={() =>
        openModal(product)
      }
    >
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <span>
        {product.category}
      </span>
    </div>
  );
}

export default ProductCard;