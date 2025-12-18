import type { UseGraphStoreType } from "@/types/types";
import type { Edge, Node } from "@xyflow/react";
import { create } from "zustand";

export const useGraphStore = create<UseGraphStoreType>((set) => ({
    selectedNode: "",
    setSelectedNode: (node: string) => set({ selectedNode: node }),
    selectedNodes: [],
    setSelectedNodes: (nodes: Node[]) => set({ selectedNodes: nodes }),
    addNode: (node: Node) => set((state) => ({ selectedNodes: [...(state.selectedNodes ?? []), node], })),
    removeNode: (nodeId: string) => set((state) => ({ selectedNodes: state.selectedNodes.filter((n) => n.id !== nodeId) })),
    updateNode: (nodeId: string, node: Node) => set((state) => ({ selectedNodes: state.selectedNodes.map((n) => (n.id === nodeId ? node : n)) })),
    selectedEdges: [],
    setSelectedEdges: (edges: Edge[]) => set({ selectedEdges: edges }),
    setAddEdge: (edge: Edge) => set((state) => ({ selectedEdges: [...(state.selectedEdges ?? []), edge] }))
}))