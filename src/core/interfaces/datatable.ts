import { IDatatableAction } from "../actions";

export interface IDatatableProps {
    headers: ITableConfig[];
    data: any[];

    handler: (action: IDatatableAction, data?: any) => void
}

export interface ITableConfig {
    title: string;
    column: string;

    date?: boolean;
}