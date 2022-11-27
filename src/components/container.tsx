import React from "react"

interface ContainerProps {
    sx: React.CSSProperties
}

const Container = (props: ContainerProps) => {
    const { sx } = props
    return (
        <div style={{ ...sx }}>

        </div>
    )
}

export default Container