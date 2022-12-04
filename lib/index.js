import { SpacingValues, SpacingKeys } from "../types/style";
export const getValuesFromStyleMap = (map, keysEnum, valuesEnum) => {
    var _a;
    const values = {};
    (_a = Object.entries(map)) === null || _a === void 0 ? void 0 : _a.forEach(([key, value]) => {
        const newKey = keysEnum[key];
        const newValue = valuesEnum[value];
        values[newKey] = newValue;
    });
    return Object.assign({}, values);
};
export const fusionStyles = (sx, spacingsMap) => {
    const spacings = spacingsMap ? getValuesFromStyleMap(spacingsMap, SpacingKeys, SpacingValues) : null;
    return Object.assign(Object.assign({}, sx), spacings);
};
