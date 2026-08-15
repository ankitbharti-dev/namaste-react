const heading = React.createElement("div", 
    {id:"div1"}, 
    [React.createElement("div", {id:"innerDiv1"}, [React.createElement("h1", {id:"header1"}, "Heading 1"), React.createElement("h2", {id:"header2"}, "Heading 2")]),
[React.createElement("div", {id:"innerDiv2"}, [React.createElement("h1", {id:"header3"}, "Heading 3"), React.createElement("h2", {id:"header4"}, "Heading 4")])]]
    );



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);