type Meta = {
    timestamp: string;
    requestId: string;
};
export type GeneralResponse = {
    success: boolean;
    status: number;
    meta: Meta;
};
