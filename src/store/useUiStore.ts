import { create } from 'zustand'



export const useUiStore = create((set) => ({
    selectedApp: "",
    setSelectedApp: (app: string) => set({ selectedApp: app }),
}))