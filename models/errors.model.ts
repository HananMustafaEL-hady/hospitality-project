export class NetworkError extends Error {}
export class ConflictError extends Error {}
export class BadRequestError extends Error {}
export class NotFoundError extends Error {}
export class UnAuthenticatedError extends Error {}
export class ForbiddenError extends Error {}
export class InternalServerError extends Error {}

export class UnProcessableEntityError extends Error {
    public errorMap: { [param: string]: string; message: string };
    constructor(message: any, errorMap?: any) {
      super(message);
      this.errorMap = errorMap;
    }
}

export type HttpError =
  | NetworkError
  | UnAuthenticatedError
  | ForbiddenError
  | BadRequestError
  | UnProcessableEntityError
  | NotFoundError
  | ConflictError
  | UnProcessableEntityError;
