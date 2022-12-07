import React from "react";
import { GenericMapping } from "../types";
import { SpacingKeys, GenericCSSProps, BorderKeys } from "../types/style";
import { colorsPalette, spacingsPalette, weightsPalette } from "../lib/style"

// TODO: find a better way for typing parameters
const getValuesFromStyleMap = (map: any, keysEnum: any, valuesPalette: any, defaultValue?: string): GenericCSSProps => {
    const values: GenericCSSProps = {}
    Object.entries(map)?.forEach(([key, value]) => {
        const newKey = keysEnum[(key as keyof typeof keysEnum)] as string
        const newValue = valuesPalette[(value as keyof typeof valuesPalette)] as string
        values[newKey] = newValue + defaultValue
    })
    return {
        ...values,
    }
}

const fusionSubStyles = (map: any, keysEnum: any, valuesPalettesArray: any[], defaultValue?: string) => {
    const values: GenericCSSProps = {}
    Object.entries(map)?.forEach(([key, value]) => {
        const newKey = keysEnum[(key as keyof typeof keysEnum)] as string
        const newValue = value as Object
        Object.values(newValue)?.forEach((value, i) => {
            i === 0 ?
                values[newKey] = valuesPalettesArray[i][value]
                :
                values[newKey] += valuesPalettesArray[i][value]
        })
    })
    return {
        ...values,
    }
}

export const fusionStyles = (
    sx?: React.CSSProperties,
    spacingsMap?: GenericMapping<SpacingKeys>,
    bordersMap?: GenericMapping<BorderKeys>
) => {
    const spacings = spacingsMap ? getValuesFromStyleMap(spacingsMap, SpacingKeys, spacingsPalette) as GenericCSSProps : null
    const borders = bordersMap ? fusionSubStyles(bordersMap, BorderKeys, [weightsPalette, colorsPalette], " solid") as GenericCSSProps : null
    return {
        ...sx,
        ...spacings,
        ...borders,
    }
}