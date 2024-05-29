import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    //   The second argument to the effect hook (eg: [category]) is the dependencies array.
    //  If you leave it out, React will execute the effects after every render.
    // If you pass an empty array, React will execute only once the first time the component is rendered.
    // If you add one or more values, which can be props or state variables, React will rerun the effect every time
    // any of these values changes.

    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
