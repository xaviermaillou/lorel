import { Spacings, SpacingShortcuts } from "../types/style";
export const fusionSpacing = (sx, map) => {
    const spacing = {};
    if (map) {
        Object.entries(map).forEach(([key, value]) => {
            const newKey = SpacingShortcuts[key];
            const newValue = Spacings[Number(value)];
            spacing[newKey] = newValue;
        });
    }
    return Object.assign(Object.assign({}, sx), spacing);
};
