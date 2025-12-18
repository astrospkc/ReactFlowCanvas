
import type { useAppStoreType } from '@/types/types'
import { create } from 'zustand'


export const useAppStore = create<useAppStoreType>((set) => ({
    selectedApp: "",
    setSelectedApp: (app: string) => set({ selectedApp: app }),
}))