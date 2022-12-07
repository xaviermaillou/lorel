import React from "react"
import { fusionStyles } from "../lib"
import { basicStyle } from "../lib/style"
import { CommonProps } from "../types/style"

interface ContainerProps extends CommonProps {

}

const Container = (props: ContainerProps) => {
    const styles = fusionStyles(props.sx, props.spacing)

    return (
        <div style={{
            ...basicStyle,
            ...styles,
        }}
        ></div>
    )
}

export default Container