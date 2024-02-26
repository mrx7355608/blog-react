import {
    ReactNode,
    SetStateAction,
    Dispatch,
    createContext,
    useContext,
    useState,
} from "react";

const initialState = {
    admin: {},
    setAdmin: () => null,
};

interface IAdmin {
    name: string;
    username: string;
}

interface IAdminContext {
    admin: IAdmin;
    setAdmin: Dispatch<SetStateAction<IAdmin>>;
}

const AdminContext = createContext(initialState);
export const useAdminContext = () => useContext(AdminContext);

export default function AdminProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<IAdmin>({});
    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
}
