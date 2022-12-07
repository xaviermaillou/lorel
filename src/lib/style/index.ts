import { SpacingKeys } from "../../types/style";

const colorsLib = {
    lightTheme: {
        background: "rgba(255, 255, 255, 1)",
        color: {
            primary: "rgba(0, 0, 0, 0.75)",
            secondary: "rgba(0, 0, 0, 0.5)",
        }
    },
    darkTheme: {
        background: "rgba(36, 37, 37, 1)",
        color: {
            primary: "rgba(199, 192, 181, 0.75)",
            secondary: "rgba(199, 192, 181, 0.5)",
        }
    }
}

export const colorsPalette = {
    whitePaper: colorsLib.lightTheme.background,
    blackInk: colorsLib.lightTheme.color.primary,
    washyInk: colorsLib.lightTheme.color.secondary,
    carbonPaper: colorsLib.lightTheme.background,
    chalk: colorsLib.lightTheme.color.primary,
    lightChalk: colorsLib.lightTheme.color.secondary,
}

export const weightsPalette = {
    none: "none",
    lighter: "1px",
    light: "2px",
    regular: "4px",
    bold: "6px",
    bolder: "8px",
}

export const spacingsPalette = {
    0: "0px",
    1: "24px",
    2: "48px",
    3: "72px",
    4: "96px",
    5: "192px",
    6: "384px",
    7: "768px",
}

export const basicStyle = {
    [SpacingKeys.p]: spacingsPalette[1]
}