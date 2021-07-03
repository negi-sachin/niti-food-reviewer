import React,{useEffect} from "react";
import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import  Header from "components/landing/Header";
import Content from "components/Product/Content";

function Product({ location, match }) {
  useEffect(()=>{
window.scroll(0,0)
  },[])
    return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        {/* <Header /> */}
        <Header title={location.title} />
        <Content/>
      </main>
      <DefaultFooter />
    </>
  );
}

export default Product;
