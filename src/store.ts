import { create } from 'zustand';

interface User {
  name: string;
}

interface Store {
  isAuthenticated: boolean;
  user: User | null;
  output: string | null;
  error: string | null;
  setOutput: (output: string | null) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  isAuthenticated: false,
  user: null,
  output: null,
  error: null,
  setOutput: (output) => set({ output }),
  setError: (error) => set({ error }),
}));