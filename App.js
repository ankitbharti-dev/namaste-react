import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> <title>This is th title</title>;

const Header1 = () => <h1>First heading</h1>;

const header2 = <h2>Second header</h2>;

const Header3 = () => <h3>Third Header</h3>

const RenderingDiv = () => { return(
    <>
    <Title/>
    <Header1 />
    {header2}
    <Header3></Header3>
    </>
);};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderingDiv/>);