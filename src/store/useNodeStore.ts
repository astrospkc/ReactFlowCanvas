import type { UseNodeStoreType } from "@/types/types";
import { create } from "zustand";

export const useNodeStore = create<UseNodeStoreType>((set) => ({
    selectedNode: "",
    setSelectedNode: (node: string) => set({ selectedNode: node }),
    nodes: [],
    setNodes: (nodes: string[]) => set({ nodes: nodes }),
    addNode: (node: string) => set((state) => ({ nodes: [...state.nodes, node] })),
    removeNode: (node: string) => set((state) => ({ nodes: state.nodes.filter((n) => n !== node) })),
    updateNode: (node: string) => set((state) => ({ nodes: state.nodes.map((n) => (n === node ? node : n)) })),
}))