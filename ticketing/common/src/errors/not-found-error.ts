import { CustomError } from './custom-errors';

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Not Found';

  constructor() {
    super('Route not found');

    // only because we are extending a build in class (class build-in in JS )
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ];
  }
}
