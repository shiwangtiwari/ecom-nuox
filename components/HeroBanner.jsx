import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {

  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

   return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button" onClick={() => {
    onAdd(product, qty);

    setShowCart(true);
}}>{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner