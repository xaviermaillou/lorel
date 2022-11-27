import React from "react";
const Container = (props) => {
    const { sx } = props;
    return (React.createElement("div", { style: Object.assign({}, sx) }));
};
export default Container;
