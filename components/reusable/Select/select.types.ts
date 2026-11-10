interface SelectOption<T extends string | number>{
    value: T
    label: string;
}

interface GenericSelectOption<T extends string | number>{
    options: SelectOption<T>[];
}