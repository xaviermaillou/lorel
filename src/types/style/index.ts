import React from "react";

export interface GenericCSSProps {
    [index: string]: string
}

export interface BorderValuesProps {
    weight?: string
    color?: string
}

export enum SpacingKeys {
    p = "padding",
    pt = "padding-top",
    pr = "padding-right",
    pb = "padding-bottom",
    pl = "padding-left",
    m = "margin",
    mt = "margin-top",
    mr = "margin-right",
    mb = "margin-bottom",
    ml = "margin-left"
}

export enum BorderKeys {
    b = "border",
    bt = "border-top",
    br = "border-right",
    bb = "border-bottom",
    bl = "border-left"
}

export interface CommonProps {
    sx?: React.CSSProperties
}