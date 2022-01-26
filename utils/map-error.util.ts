import { AxiosError } from "axios";
import {
  BadRequestError,
  ForbiddenError,
  ConflictError,
  NetworkError,
  UnAuthenticatedError,
  UnProcessableEntityError,
  NotFoundError,
  InternalServerError,
} from "../models/errors.model";
import Router from "next/router";

export function mapAxiosError(error: AxiosError) {
  console.log(error);
  if (!error.response) {
    return new NetworkError();
  } else {
    const status = error.response.status;
    const causeError = error.response.data;
    switch (status) {
      case 401:
        // Router.push(`/login`);
        return new UnAuthenticatedError("خطأ في بيانات المرور");

      case 403:
        return new ForbiddenError();
      case 400:
        return new BadRequestError(causeError.message[0]);
      // case 422:
      // 	return _mapUnProccessableEntityError(causeError.errors);
      case 404:
        Router.push(`/notfound`);

        return new NotFoundError(causeError.errors[0].message);
      case 409:
        return new ConflictError(causeError.message);
      //    case 500:
      //        return new InternalServerError(JSON.stringify(error.response.data)) ;
      default:
        return error;
    }
  }
}

// function _mapUnProccessableEntityError(errorsList) {
// 	const message = errorsList[0].message;
// ​
// 	if (typeof message === "string") {
// 		return new UnProcessableEntityError(message);
// 	} else {
// 		// object
// 		const mappedError = {};
// 		errorsList.forEach(e => {
// 			mappedError[e.param] = Object.values(e.message)[0];
// 		});
// 		return new UnProcessableEntityError("PARAMS", mappedError);
// 	}
// }
