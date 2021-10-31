import React from "react";

var d=new Date();
var year=d.getFullYear();

function Footer(){
    return <footer><p>	&#169;{year}</p></footer>;

}
export default Footer;