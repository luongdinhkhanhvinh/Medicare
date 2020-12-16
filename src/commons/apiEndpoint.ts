export class ApiEndpoint {
  static readonly SIGN_UP = '/users/sign-up';
  static readonly SIGN_IN = '/users/sign-in';
  static readonly RENEW_TOKEN = '/users/renew-token';
  static readonly USER_PROFILE = '/users/me';
  static readonly USER_CHANGE_PASSWORD = '/users/password';
  static readonly USER_RESEND_PASSWORD = '/users/resend-password/{id}';
  static readonly USER_RESET_PASSWORD = '/users/reset-password/{id}';
  static readonly USER_CHANGE_PASSWORD_FIRST_LOGIN = '/users/password/verification/{id}';
}
