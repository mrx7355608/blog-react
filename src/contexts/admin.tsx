import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

export interface IAdmin {
    name: string;
    username: string;
}

interface IAdminContext {
    admin: IAdmin;
    setAdmin: Dispatch<SetStateAction<IAdmin>>;
}

const initialState = {
    admin: {
        name: "",
        username: "",
    },
    setAdmin: () => null,
};

const AdminContext = createContext<IAdminContext>(initialState);
export const useAdminContext = () => useContext(AdminContext);

export default function AdminProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<IAdmin>(initialState.admin);
    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
}
