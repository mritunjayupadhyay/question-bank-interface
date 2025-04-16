export interface IBaseResponse {
    error: boolean;
    message: string;
}

export interface ILabelValue {
    label: string;
    value: string;
    isSelected?: boolean;
    icon?: string;
}