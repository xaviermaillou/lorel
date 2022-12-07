// TODO: find a way to inject an object so that its keys replace "any" here
export type GenericMapping<KeyType> = {
    [Property in keyof KeyType]: any
}