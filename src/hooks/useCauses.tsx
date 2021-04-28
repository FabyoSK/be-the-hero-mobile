import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
// import { api } from "../services/api";

interface Cause {
  id: string;
  name: string;
  description: string;
  value: string;
  organization_id: string;
  organization_name: string;
}
interface Organization {
  id: string;
  name: string;
  email: string;
  whatsApp: string;
  city: string;
  uf: string;
}
interface CauseContextProps {
  causes: Cause[];
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
    // api.get<Case[]>("cases").then((response) => setCases(response.data));

    const fakeCauses = [
      {
        name: "Cadelinha Atropelada",
        description: "Ajude a salvar a cadelinha Jolie",
        value: "120",
        organization_id: "plgC3gt",
        organization_name: "FSK",
        id: "1",
      },
    ];
    setCauses(fakeCauses);
  }, []);

  async function getOrganization(name: string) {
    // const response = await api.get("organizations", {
    //   params: {
    //     name: name,
    //   },
    // });
    // setOrganization(response.data[0]);
    return organization;
  }
  return (
    <CauseContext.Provider
      value={{
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
