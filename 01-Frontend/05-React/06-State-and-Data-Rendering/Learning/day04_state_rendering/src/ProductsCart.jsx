import React from "react";

const ProductsCart = ({product, del})=> {
    
  return (
    <div className="w-40 border-2 p-4 rounded m-5">
      <div >
        <img
          src={product.image}
          alt="dummy Image"
        />
      </div>
      <div>
        <h2 className="font-semibold">{product.title.substring(0, 20)}</h2>
        <p>{product.category}</p>
        <p className="text-green-500">{product.price}</p>
      </div>
      <button onClick={()=> del(product.id)} className="p-2 bg-red-500 hover:bg-sky-700 border-none select text  w-20">Delete</button>
    </div>
  );
}

export default ProductsCart;
