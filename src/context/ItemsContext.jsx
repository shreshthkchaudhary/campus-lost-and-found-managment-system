import { createContext, useContext } from 'react';
import { useItems } from '../hooks/useItems';

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const itemsData = useItems();
  return (
    <ItemsContext.Provider value={itemsData}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItemsContext() {
  return useContext(ItemsContext);
}
