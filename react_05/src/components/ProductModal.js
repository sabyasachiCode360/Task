function ProductModal({
  selectedProduct,
  closeModal
}) {
  if (!selectedProduct)
    return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          onClick={closeModal} className="cross"
        >
          X
        </button>
        <div className="image_div">
           <img className="p_images"
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />

        </div>

       

        <h2 className="P_title">
          {selectedProduct.title}
        </h2>

        <p className="p_details">
          {selectedProduct.description}
        </p>

        <h3 className="p_price">
          ${selectedProduct.price}
        </h3>

        <p>
          {selectedProduct.category}
        </p>

      </div>
    </div>
  );
}

export default ProductModal;