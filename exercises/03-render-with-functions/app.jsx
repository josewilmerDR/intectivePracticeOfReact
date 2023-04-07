import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const PrintHello = (htmlString) => {
	return <h1>{htmlString}</h1>;
};

//              what           where
ReactDOM.render(PrintHello("I Love React"), document.querySelector("#myDiv"));
