import React from "react"
import { fusionSpacing } from "../lib"
import { SpacingShortcuts, Spacings, CommonProps } from "../types/style"

const containerDefaultStyles = {
    padding: Spacings[1]
}

interface ContainerProps extends CommonProps {

}

const Container = (props: ContainerProps) => {
    const styles = fusionSpacing(props.sx, props.spacing)

    return (
        <div style={{
            ...styles
        }}
        ></div>
    )
}

export default Container