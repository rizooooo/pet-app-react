export interface ICommon {
    _id?: string;
    createdAt?: Date;
}

export interface IPrivateRoute {
    component: (params?: any | null) => JSX.Element | any;
    layout: (params?: any) => JSX.Element;
    exact?: boolean;
    path: string | string[];
    roles?: number[];
}

export interface IRouteParams {
    id: string;
}

export interface IRoute {
    name: string;
    exact?: boolean;
    path: string | string[];
    component: (params?: any | null) => JSX.Element;
}

// export interface ICommon {
//     id?: number;
//     createdAt?: string;
//     updatedAt?: string;
//     audit_id?: number;
//     modified_by_id?: string;
//     ModifiedBy?: IUser;
//     is_Active?: boolean;
// }

// export interface IParamsProps {
//     id?: string | number | undefined | null;
// }

// export interface IDocumentsAttached {
//     id?: number | null;
//     uuid?: string;
//     size?: number;
//     file_name: string;
//     file: File;
//     file_path?: string;

//     invoice_header_id?: number;

//     contract_id?: number | null;

//     createdAt?: string;
//     updatedAt?: string;
// }

// export interface ICreateOptions {
//     overrideParam?: boolean
// }


// export interface IModalHandler {
//     handler: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
// }

// export interface IChartData {
//     data: number[];
//     centerText?: string | undefined;
//     backgroundColor: string[],
//     borderColor: string[],
//     labels?: (string | number | string[] | number[] | Date | Date[] | moment.Moment | moment.Moment[])[] | undefined;
// }

// export interface IMedia {
//     fieldname: string;
//     originalname: string;
//     encoding: string;
//     mimetype: string;
//     size: number;
//     bucket: string;
//     key: string;
//     acl: string;
//     contentType: string;
//     contentDisposition: string;
//     storageClass: string;
//     serverSideEncryption: string;
//     metadata: {
//         fieldName: string;
//     };
//     location: string;
//     etag: string;
// }

// export interface IUpload {
//     file_name: string;
// }
