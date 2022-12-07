import React from "react";
import { GenericMapping } from "..";

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
    ml = "margin-left",
}

export enum BorderKeys {
    b = "border",
    bt = "border-top",
    btr = "border-top-right",
    br = "border-right",
    bbr = "border-bottom-right",
    bb = "border-bottom",
    bbl = "border-bottom-left",
    bl = "border-left",
    btl = "border-top-left"
}

export interface CommonProps {
    sx?: React.CSSProperties
    spacing?: GenericMapping<SpacingKeys>
    borders?: GenericMapping<BorderKeys>
}