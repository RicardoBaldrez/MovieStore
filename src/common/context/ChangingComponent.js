import { createContext, useState } from 'react';

export const ChangingComponentContext = createContext();
ChangingComponentContext.displayName = "ChangingComponentContext";

export const ChangingComponentProvider = ({ children }) => {
  const [component, setComponent] = useState('presentation');

  return (
    <ChangingComponentContext.Provider value={{ component, setComponent }}>
      { children }
    </ChangingComponentContext.Provider>
  );
}
