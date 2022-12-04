import React from "react";
import { GenericMapping } from "../types";
import { Spacings, SpacingShortcuts } from "../types/style";

export const fusionSpacing = (sx?: React.CSSProperties, map?: GenericMapping<SpacingShortcuts, Spacings>) => {
    const spacing: {[index: string]: string} = {}
    if (map) {
        Object.entries(map).forEach(([key, value]) => {
            const newKey = SpacingShortcuts[(key as keyof typeof SpacingShortcuts)] as string
            const newValue = Spacings[Number(value)] as string
            spacing[newKey] = newValue
        })
    }
    return {
        ...sx,
        ...spacing,
    }
}