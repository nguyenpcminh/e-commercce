import React, { useState } from "react";
import { CollectionPreview } from "../../components/collection-preview";
import SHOP_DATA from "./shop-data";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (<div>{
      collections.map(({id, ...ortherCollection}) => {
            return <CollectionPreview key={id} {...ortherCollection} />
      })
      
      }</div>);
};

export default ShopPage;
