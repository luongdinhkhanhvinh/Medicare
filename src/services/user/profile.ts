import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { axiosClient } from 'src/providers/authProvider';
import { UserProfile } from 'src/types/user';

export interface UserProfileResponse extends UserProfile {}

export function getProfile(): Promise<UserProfileResponse> {
  return axiosClient.get<any, UserProfileResponse>(ApiEndpoint.USER_PROFILE);
}
