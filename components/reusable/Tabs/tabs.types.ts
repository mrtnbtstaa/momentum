interface TabsOption<T extends string>{
    tab: T
}

export interface GenericTabsOption<T extends string>{
    options: TabsOption<T>[]
}