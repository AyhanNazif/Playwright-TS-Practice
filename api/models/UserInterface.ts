export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: 'engineer' | 'viewer' | string;
  status: 'invited' | 'suspended' | string;
  avatar: string;
  createdAt: string;
}

export interface GetAllUsersResponse {
  data: User[];
}

export interface GetUserResponse {
  data: User;
}