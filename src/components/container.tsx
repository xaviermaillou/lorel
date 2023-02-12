import React from "react"
import { basicStyle } from "../lib/style"
import { CommonProps } from "../types/style"

interface ContainerProps extends CommonProps {
    children: JSX.Element
}

const Container = (props: ContainerProps) => {
    const styles = props.sx

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