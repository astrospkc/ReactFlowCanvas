import type { UseNodeStoreType } from "@/types/types";
import type { Node } from "@xyflow/react";
import { create } from "zustand";

export const useNodeStore = create<UseNodeStoreType>((set) => ({
    selectedNode: "",
    setSelectedNode: (node: string) => set({ selectedNode: node }),
    selectedNodes: [],
    setSelectedNodes: (nodes: Node[]) => set({ selectedNodes: nodes }),
    addNode: (node: Node) => set((state) => ({ selectedNodes: [...state.selectedNodes, node] })),
    removeNode: (nodeId: string) => set((state) => ({ selectedNodes: state.selectedNodes.filter((n) => n.id !== nodeId) })),
    updateNode: (nodeId: string, node: Node) => set((state) => ({ selectedNodes: state.selectedNodes.map((n) => (n.id === nodeId ? node : n)) })),
}))