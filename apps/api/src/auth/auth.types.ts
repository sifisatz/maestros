export interface AuthenticatedUser {
  id: string;
  name: string;
  role: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
