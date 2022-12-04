import React from "react";
import { GenericCSSProps, GenericMapping } from "../types";
import { SpacingValues, SpacingKeys } from "../types/style";

export const getValuesFromStyleMap = (map: any, keysEnum: any, valuesEnum: any): GenericCSSProps => {
    const values: {[index: string]: string} = {}
    Object.entries(map)?.forEach(([key, value]) => {
        const newKey = keysEnum[(key as keyof typeof keysEnum)] as string
        const newValue = valuesEnum[(value as keyof typeof valuesEnum)] as string
        values[newKey] = newValue
    })
    return {
        ...values,
    }
}

export const fusionStyles = (
    sx?: React.CSSProperties,
    spacingsMap?: GenericMapping<SpacingKeys, SpacingValues>
) => {
    const spacings = spacingsMap ? getValuesFromStyleMap(spacingsMap, SpacingKeys, SpacingValues) : null
    return {
        ...sx,
        ...spacings,
    }
}