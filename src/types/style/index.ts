import React from "react";
import { GenericMapping } from "..";

export enum Spacings {
    "0px",
    "24px",
    "48px",
    "72px",
    "96px",
    "192px",
    "384px",
    "768px",
}

export enum SpacingShortcuts {
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

export interface CommonProps {
    sx?: React.CSSProperties
    spacing?: GenericMapping<SpacingShortcuts, Spacings>
}