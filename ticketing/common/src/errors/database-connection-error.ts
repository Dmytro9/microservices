import { CustomError } from './custom-errors';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connection to database';

  constructor() {
    super('Error connection to DB');

    // only because we are extending a build in class (class build-in in JS )
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ];
  }
}
