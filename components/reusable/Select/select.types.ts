interface SelectOption<T extends string | number>{
    options: {
        label: string;
        value: T
    }[];
}
