export interface RadioOption<T extends string | number = string> {
    label: string;
    description?: string;
    value: T;
}

export interface GenericRadioGroupProps<T extends string | number>{
    options: RadioOption<T>[];
}