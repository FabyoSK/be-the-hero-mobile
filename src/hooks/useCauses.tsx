import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";

interface Cause {
  id: string;
  name: string;
  description: string;
  value: string;
  organization_id: string;
  organization_name: string;
}
interface CauseContextProps {
  causes: Cause[];
  organization?: {
    id: string;
    name: string;
    email: string;
    whatsApp: string;
    city: string;
    uf: string;
  };
  getOrganization: (name: string) => void;
}
export const CauseContext = createContext({} as CauseContextProps);

interface CauseContextProviderProps {
  children: ReactNode;
}
export function CauseContextProvider({ children }: CauseContextProviderProps) {
  const [organization, setOrganization] = useState();
  const [causes, setCauses] = useState<Cause[]>([]);

  useEffect(() => {
    api.get<Cause[]>("causes").then((response) => setCauses(response.data));
  }, []);

  async function getOrganization(name: string) {
    const response = await api.get("organizations", {
      params: {
        name: name,
      },
    });

    setOrganization(response.data[0]);
  }
  return (
    <CauseContext.Provider
      value={{
        organization,
        causes,
        getOrganization,
      }}
    >
      {children}
    </CauseContext.Provider>
  );
}
export const useCause = () => {
  return useContext(CauseContext);
};
