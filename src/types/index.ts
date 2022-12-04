export type GenericMapping<KeyType, ValueType> = {
    [Property in keyof KeyType]: ValueType
}

export interface GenericCSSProps {
    [index: string]: string
}