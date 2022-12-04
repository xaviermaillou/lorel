export type GenericMapping<KeyType, ValueType> = {
    [Property in keyof KeyType]: ValueType
}

export interface GenericCSSKeys {
    [key: string]: string
}

export interface GenericCSSValues {
    [key: number]: string
}