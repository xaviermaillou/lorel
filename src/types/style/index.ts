import React from "react";
import { GenericMapping } from "..";

export interface GenericCSSProps {
    [index: string]: string
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

export enum SpacingValues {
    "0px",
    "24px",
    "48px",
    "72px",
    "96px",
    "192px",
    "384px",
    "768px",
}

export interface CommonProps {
    sx?: React.CSSProperties
    spacing?: GenericMapping<SpacingKeys, SpacingValues>
}