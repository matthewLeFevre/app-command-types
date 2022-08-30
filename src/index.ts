// app command
export enum AppUserType {
  Admin = "ADMIN",
  Basic = "BASIC",
}
export enum AppUserPrivilege {
  DisableUser,
  DeleteUser,
  CreateAdminUser,
  CreateUser,
}
export interface AppUser {
  id: string;
  type: AppUserType;
  privileges: AppUserPrivilege[];
}
export enum ServiceType {
  Auth,
  Token,
  Cache,
}
export interface Service {
  id: string;
  type: ServiceType;
}
export interface Project {
  id: string;
  userId: string;
  users: string[];
  services: Service[];
  description?: string;
  name: string;
  logoUrl?: string;
}

// auth command
export enum EntityStatus {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
}
export interface User {
  id: string;
  status: EntityStatus;
  email: string;
  phone?: number;
  name?: string;
  verified: boolean;
  loginHistory: number[];
  passwordResetHistory: number[];
  hiddenFields: {
    pwHash: string;
    salt: string;
  };
  appId: string;
  emailToken: string;
  phoneToken?: string;
}
export interface Application {
  id: string;
  status: EntityStatus;
  key: string;
  name: string;
  userCount: number;
  agentCount: number;
  devKeys: DevKey[];
  email?: string;
  description?: string;
  logoURL?: string;
  userId?: string;
}
export interface Agent {
  id: string;
  status: EntityStatus;
  name?: string;
  userId?: string;
  description?: string;
}
export interface DevKey {
  id: string;
  userId: string;
  userName: string;
  expiryTime: number;
  key: string;
}

// token command
export enum TokenType {
  Plain,
  Encrypted,
  Stateless,
}
export interface Token {
  type: TokenType;
  appId?: string;
  userId?: string;
  token: string;
  expireTime: number;
}
export interface StatelessToken extends Token {
  data: any;
}

// cache command
export interface Database {
  id: string;
  name: string;
  description?: string;
  key: string;
  tokens: [];
}
