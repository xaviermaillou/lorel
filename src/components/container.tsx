import React from "react"
import { fusionStyles } from "../lib"
import { SpacingKeys, SpacingValues, CommonProps } from "../types/style"

const containerDefaultStyles = {
    padding: SpacingValues[1]
}

interface ContainerProps extends CommonProps {

}

const Container = (props: ContainerProps) => {
    const styles = fusionStyles(props.sx, props.spacing)

    return (
        <div style={{
            ...styles
        }}
        ></div>
    )
}

export default Container