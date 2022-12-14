import React from "react"
import { fusionStyles } from "../lib"
import { basicStyle } from "../lib/style"
import { CommonProps } from "../types/style"

interface ContainerProps extends CommonProps {
    children: JSX.Element
}

const Container = (props: ContainerProps) => {
    const styles = fusionStyles(props.sx, props.spacing, props.borders)
console.log("STYLES", styles)
    return (
        <div style={{
            ...basicStyle,
            ...styles,
        }}
        >
            {props.children}
        </div>
    )
}

export default Container