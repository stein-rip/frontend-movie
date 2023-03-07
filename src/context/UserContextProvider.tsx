import { ReactNode } from "react";
import User from "../models/User";
import UserContext from "./UserContext";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  // const [user, setUser] = useState<User | null>({
  //   _id: "63ebd51996022c8340139163",
  // });
  const user: User = { _id: "63ebd51996022c8340139163" };
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
