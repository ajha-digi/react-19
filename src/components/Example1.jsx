import { use, Suspense, useEffect } from 'react';

const fetchData = async () => {
  const res = await fetch('https://dummyjson.com/products/1');
  return res.json();
};

const fetchDataEffect = async () => {
    const res = await fetch('https://dummyjson.com/products/1');
    const resp = await res.json();
    console.log(resp)
  };

const Pdp = () => {
  const product = use(fetchData());
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.images[0]}  alt={product.category}/>
        <p>{product.description}</p>
    </div>
  );
};

const Product = () => {
    useEffect(()=>{
        fetchDataEffect()
    },[])
  return (
    <Suspense
      fallback={ <h2>Loading...</h2>}
    >
      <title>Product details</title>
      <meta name='description' content='pdp page' />
      <meta name='keywords' content='product, items' />

      <Pdp />
    </Suspense>
  );
};

export default Product