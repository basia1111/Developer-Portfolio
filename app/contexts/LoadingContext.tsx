import { createContext, useState } from 'react';

interface LoadingType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LoadingContext = createContext<LoadingType>({
  isLoading: true,
  setIsLoading: () => {},
});
