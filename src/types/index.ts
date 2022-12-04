export type GenericMapping<KeyType, ValueType> = {
    [Property in keyof KeyType]: ValueType
}