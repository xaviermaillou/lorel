import React from "react";
import { fusionStyles } from "../lib";
import { SpacingValues } from "../types/style";
const containerDefaultStyles = {
    padding: SpacingValues[1]
};
const Container = (props) => {
    const styles = fusionStyles(props.sx, props.spacing);
    return (React.createElement("div", { style: Object.assign({}, styles) }));
};
export default Container;
