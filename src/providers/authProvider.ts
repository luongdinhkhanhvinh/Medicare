import { JwtAuthProvider } from '@devblock/react-auth/dist/providers/jwt';
import { AxiosInstance } from 'axios';
import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { CookieKey } from 'src/commons/cookieKey';
import history from '../helpers/history';
import { RouteName } from '../routers/routeName';

export class AppAuthProvider extends JwtAuthProvider {
  constructor() {
    super({
      accessTokenKey: CookieKey.ACCESS_TOKEN,
      refreshTokenKey: CookieKey.REFRESH_TOKEN,
      endpoints: {
        signIn: ApiEndpoint.SIGN_IN,
        signUp: ApiEndpoint.SIGN_UP,
        renewToken: ApiEndpoint.RENEW_TOKEN,
        updatePassword: ApiEndpoint.USER_CHANGE_PASSWORD,
        accountVerification: ApiEndpoint.USER_CHANGE_PASSWORD_FIRST_LOGIN,
        sendResetPasswordEmail: ApiEndpoint.USER_RESET_PASSWORD,
        sendVerificationEmail: ApiEndpoint.USER_RESEND_PASSWORD,
      },
    });
  }

  initializeAxiosClient(axiosClient: AxiosInstance): void {
    super.initializeAxiosClient(axiosClient);
    axiosClient.defaults.baseURL = process.env.API_ENDPOINT || '';
  }

  async signOut(): Promise<any> {
    await super.signOut();
    history.replace(RouteName.LOGIN);
  }
}

export const authProvider = new AppAuthProvider();
export const axiosClient = authProvider.axiosClient;
