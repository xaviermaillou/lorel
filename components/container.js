import React from "react";
import { fusionStyles } from "../lib";
import { basicStyle } from "../lib/style";
const Container = (props) => {
    const styles = fusionStyles(props.sx, props.spacing);
    return (React.createElement("div", { style: Object.assign(Object.assign({}, basicStyle), styles) }));
};
export default Container;
