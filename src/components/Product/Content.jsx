import React from "react";
import ProductCard from "./Card";

function Content() {
  return (
    <div className="flex mt-6 relative" style={{top:"-17rem"}}>
      <div className="p-6">
        <ProductCard />
      </div>
      <div className="p-6">
        <ProductCard />
      </div>
      <div className="p-6">
        <ProductCard />
      </div>
    </div>
  );
}

export default Content;
