import { SpacingKeys, BorderKeys } from "../types/style";
import { colorsPalette, spacingsPalette, weightsPalette } from "../lib/style";
// TODO: find a better way for typing parameters
const getValuesFromStyleMap = (map, keysEnum, valuesPalette, defaultValue) => {
    var _a;
    const values = {};
    (_a = Object.entries(map)) === null || _a === void 0 ? void 0 : _a.forEach(([key, value]) => {
        const newKey = keysEnum[key];
        const newValue = valuesPalette[value];
        values[newKey] = newValue + defaultValue;
    });
    return Object.assign({}, values);
};
const fusionSubStyles = (map, keysEnum, valuesPalettesArray, defaultValue) => {
    var _a;
    const values = {};
    (_a = Object.entries(map)) === null || _a === void 0 ? void 0 : _a.forEach(([key, value]) => {
        var _a;
        const newKey = keysEnum[key];
        const newValue = value;
        (_a = Object.values(newValue)) === null || _a === void 0 ? void 0 : _a.forEach((value, i) => {
            console.log("palette", valuesPalettesArray[i]);
            console.log("value", value);
            console.log("result", valuesPalettesArray[i][value]);
            values[newKey] += (i > 0 ? " " : "") + valuesPalettesArray[i][value];
        });
    });
    return Object.assign({}, values);
};
export const fusionStyles = (sx, spacingsMap, bordersMap) => {
    const spacings = spacingsMap ? getValuesFromStyleMap(spacingsMap, SpacingKeys, spacingsPalette) : null;
    const borders = bordersMap ? fusionSubStyles(bordersMap, BorderKeys, [weightsPalette, colorsPalette], " solid") : null;
    console.log("borders result", borders);
    return Object.assign(Object.assign(Object.assign({}, sx), spacings), borders);
};
