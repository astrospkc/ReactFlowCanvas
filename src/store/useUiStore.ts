import type { UiStoreType } from '@/types/types'
import { create } from 'zustand'




export const useUiStore = create<UiStoreType>((set) => ({
    selectedApp: "",
    setSelectedApp: (app: string) => set({ selectedApp: app }),
}))