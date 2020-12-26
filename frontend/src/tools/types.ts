export interface ICustomSlider {
    label: string;
    min: number;
    max: number;
    current: number;
    disabled: boolean;
}

export interface ITableColumn {
    id: "name" | "min" | "current" | "max";
    label: string;
}
export interface ITableRow {
    name: string;
    min: number;
    current: number;
    max: number;
}