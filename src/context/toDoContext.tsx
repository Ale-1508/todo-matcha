import {createContext, useContext, useState, ReactNode } from "react";

const ToDoContext = createContext<AppState | undefined>(undefined);

interface Props {
  children: ReactNode;
}

interface AppState {
  isOpen: boolean,
  type: string,
  message: string,
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
}

export const ToDoProvider = ({ children }:Props) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <ToDoContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);
