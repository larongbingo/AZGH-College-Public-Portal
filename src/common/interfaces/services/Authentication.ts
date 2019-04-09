
export interface ILogIn {
  logIn(username: string, password: string): Promise<string | null>;
}

export interface ILogOut {
  logOut(session: string): Promise<boolean>;
}
