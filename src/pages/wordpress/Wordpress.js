import React from "react";
import "../wordpress/styles/Wordpress.scss";
import "../wordpress/styles/Wordpress.scss";
import "../wordpress/styles/wordpress.module.scss";


import WordpressHeader from "./components/WordpressHeader";
import WordpressBottom from "./components/WordpressBottom";
import WordpressForm from "./components/WordpressForm";


function Wordpress() {
  return (
    <>
      <WordpressHeader />
      <WordpressBottom />
      <WordpressForm />
    </>
  );
}

export default Wordpress;
