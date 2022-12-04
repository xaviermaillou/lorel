import React from "react";
import { fusionSpacing } from "../lib";
import { Spacings } from "../types/style";
const containerDefaultStyles = {
    padding: Spacings[1]
};
const Container = (props) => {
    const styles = fusionSpacing(props.sx, props.spacing);
    return (React.createElement("div", { style: Object.assign({}, styles) }));
};
export default Container;
