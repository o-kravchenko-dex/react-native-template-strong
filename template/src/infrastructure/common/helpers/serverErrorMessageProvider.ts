/* eslint-disable complexity */
import {ServerErrorTypes} from "~/infrastructure/dto/common/ServerErrorTypes";
import {ErrorType} from "~/infrastructure/dto/common/ErrorType";
import {ErrorSignType} from "~/infrastructure/dto/common/ErrorSignType";
import {i18next, TFuncKeyApp} from "~/common/localization/localization";

function getServerErrorResult(messageKey: TFuncKeyApp | undefined): string | undefined {
  return messageKey ? i18next.t(messageKey).toString() : undefined;
}

export function serverErrorMessageProvider(_serverError?: ErrorType & {errorSign: string}, isPassword?: boolean): string | undefined {
  let errorMessage: TFuncKeyApp | undefined;
  const errorDescription = _serverError?.data?.error_description || _serverError?.data?.Data?.ErrorMessage;

  const serverErrorCheck = _serverError?.status == 400
    && (_serverError.data?.error == "invalid_client" || _serverError.data?.error == "invalid_grant") && !isPassword;

  if (serverErrorCheck) {
    errorMessage = _serverError.errorSign == ErrorSignType.errorTip ? "errors.invalidCredentials" : undefined;
  } else if ((_serverError?.status == 400 || _serverError?.status == 500) && errorDescription == "incorrect password" && isPassword) {
    errorMessage = "authentication.wrongPassword";
  } else if (_serverError?.data?.Type) {
    console.log("%c_serverError", "color: red", _serverError);
    if (_serverError?.data?.Data.Email) {
      errorMessage = _serverError.errorSign == ErrorSignType.errorTip
        ? "errors.serverErrors.errors.UserAlreadyExistException.RegisterRequest.emailAlreadyExist"
        : "errors.userEmailAlreadyExists";
    } else if (_serverError?.data?.Data.Phone) {
      errorMessage = _serverError.errorSign == ErrorSignType.errorTip
        ? `errors.serverErrors.errors.UserAlreadyExistException.RegisterRequest.phoneAlreadyExist`
        : "errors.userPhoneAlreadyExists";
    } else if (_serverError.data.Message == "try some later") {
      errorMessage = `errors.serverErrors.${ServerErrorTypes.antiSpamCheck}`;
    } else if (_serverError.data.Message == "User not found") {
      errorMessage = _serverError.errorSign == ErrorSignType.errorTip
        ? "errors.invalidUserLogin" : `errors.serverErrors.${ServerErrorTypes.userNotFound}`;
    } else if ((_serverError as any).message) {
      return (_serverError as any).message;
    } else {
      errorMessage = `errors.serverErrors.${_serverError?.data?.Type}` as TFuncKeyApp;
    }
  } else {
    if (_serverError != null) {
      if (_serverError.errorSign != ErrorSignType.errorTip
        && JSON.stringify(_serverError.data?.errors)?.toLowerCase()?.indexOf("invalid") >= 0
      ) {
        errorMessage = "errors.validationError";
      } else {
        errorMessage = `errors.status.${_serverError.status}` as TFuncKeyApp;
      }
    } else {
      return undefined;
    }
  }

  return getServerErrorResult(errorMessage);
}
