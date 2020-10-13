import { ValidationError } from 'express-validator';
import { CustomError } from './custom-errors';

// interface CustomError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string;
//     field?: string;
//   }[];
// }

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters'); // for logging

    // only because we are extending a build in class (class build-in in JS )
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => ({
      message: error.msg,
      field: error.param
    }));
  }
}
