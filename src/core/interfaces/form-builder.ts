import { RegisterOptions } from "react-hook-form";

export interface IFormBuilderProps {
    schema: IFormBuilderLayout[];

    onSubmit: (params: any) => Promise<void>;

    config?: IFormBuilderConfig;
    defaultValues?: any;

    formCustomButtons?: () => JSX.Element;
}

export interface IFormBuilderConfig {
    submitText?: string;

    showCancelButton?: boolean;
    cancelButtonText?: string;
    cancelButtonHandler?: () => void;
}

export interface IFormBuilderLayout {
    header?: string;
    rows: IFormBuilderLayoutRow[];
}

export interface IFormBuilderLayoutRow {
    label: string;
    name: string;
    size: number

    type: 'text' | 'number' | 'dropdown'

    rules?: RegisterOptions;

    placeholder: boolean | string;

    dropdown?: {
        items: any[];
        label: string[] | string;
        value: string;
    }
}