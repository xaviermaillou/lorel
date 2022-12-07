import React from "react";
import { fusionStyles } from "../lib";
import { basicStyle } from "../lib/style";
const Container = (props) => {
    const styles = fusionStyles(props.sx, props.spacing, props.borders);
    console.log("STYLES", styles);
    return (React.createElement("div", { style: Object.assign(Object.assign({}, basicStyle), styles) }, props.children));
};
export default Container;
