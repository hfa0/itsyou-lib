export declare const formatDate: (date: string | Date | number) => string;
export declare const formatDateTime: (date: string | Date | number) => string;
export declare const formatDateRange: (from: string | Date | number, to: string | Date | number) => string;
export declare const formatName: (user: {
    firstname: string;
    lastname: string;
}) => string;
export declare const formatNumber: (num: number) => string;
export declare const formatPriceReadable: (num: number, curr?: boolean) => string;
export declare const formatPriceRounded: (num: number) => string;
