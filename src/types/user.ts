export enum UserStatus {
  UNVERIFIED = 'unverified',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PASSWORD_RESET = 'password_reset',
}

export enum Gender {
  NO_PREFERENCE = '',
  MALE = 'male',
  FEMALE = 'female',
  TRANSGENDER = 'transgender',
  GENDER_NEUTRAL = 'gender neutral',
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  userStatus: UserStatus;
  profileImageUrl?: any;
  createdAt: string;
  updatedAt: string;
}
