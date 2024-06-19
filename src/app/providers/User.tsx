import { User } from "@/lib/types";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

// Define the shape of the user object

// Create a new context for the user
const UserContext = createContext<
  (User | Dispatch<SetStateAction<User | null>> | null)[] | null
>(null);

// Create a UserProvider component to wrap your app with
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
