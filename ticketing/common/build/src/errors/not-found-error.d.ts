import { CustomError } from './custom-errors';
export declare class NotFoundError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
//# sourceMappingURL=not-found-error.d.ts.map