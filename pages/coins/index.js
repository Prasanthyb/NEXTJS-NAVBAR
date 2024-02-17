import React from "react";
import Axios from "axios";

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Company: {item.company}</p>
          <p>Category: {item.category}</p>
          <p>Colors: {item.colors.join(", ")}</p>
          {item.shipping && <p>Shipping Available</p>}
          {item.featured && <p>Featured</p>}
          <img src={item.image} alt={item.name} style={{ maxWidth: "300px" }} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get("https://api.pujakaitem.com/api/products");

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
