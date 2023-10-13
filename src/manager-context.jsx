import React from 'react';
import { Manager } from './manager';

export const ManagerContext = React.createContext();

export function ManagerContextProvider({ children }) {

    const manager = React.useMemo(() => {
        return new Manager();
    }, []);

    return (
        <ManagerContext.Provider value={{ manager }} >
            {children}
        </ManagerContext.Provider>
    );
}