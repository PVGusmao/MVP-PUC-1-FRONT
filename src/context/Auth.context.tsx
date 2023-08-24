import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";
import { IUser } from "../interfaces/global.interfaces";

export type IAuthContext = {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
};

export const AuthContext = createContext({} as IAuthContext);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AuthProvider({ children }: Props) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState({} as IUser);

  return (
    <AuthContext.Provider
      value={
        {
          loggedIn, setLoggedIn,
          user, setUser,
        } as IAuthContext
      }
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext) as IAuthContext;

  return context;
}