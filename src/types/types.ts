import type { Edge, Node } from "@xyflow/react";


export type AppType = {
    id: string,
    name: string
}
export interface useAppStoreType {
    selectedApp: string,
    setSelectedApp: (app: string) => void,
    apps: AppType[] | [],
    setApps: (apps: AppType[] | []) => void

}


export type ServiceNode = Node<{
    icon: React.ReactNode,
    service: string,
    rate: string,
    metrics: {
        cpu: number,
        memory: string,
        disk: string,
        region: number
    },
    activeMetric: "CPU" | "Memory" | "Disk" | "Region",
    slider: {
        min: number,
        max: number,
        value: number,
        unit: string
    },
    status: {
        label: string,
        type: "healthy" | "unhealthy"
    },
    provider: string
}>;


export type Details = {
    icon: React.ReactNode,
    service: string,
    rate: string,
    metrics: {
        cpu: number,
        memory: string,
        disk: string,
        region: number
    },
    activeMetric: "CPU" | "Memory" | "Disk" | "Region",
    slider: {
        min: number,
        max: number,
        value: number,
        unit: string
    },
    status: {
        label: string,
        type: "healthy" | "unhealthy"
    },
    provider: string
}

export const DefaultNode = {
    id: "default",
    type: 'app',
    data: {},
    position: { x: 0, y: 0 }
}

export type UseGraphStoreType = {
    selectedNode: string,
    setSelectedNode: (node: string) => void,
    selectedNodes: Node[],
    setSelectedNodes: (nodes: Node[]) => void,
    addNode: (node: Node) => void,
    removeNode: (nodeId: string) => void,
    updateNode: (nodeId: string, node: Node) => void
    selectedEdges: Edge[],
    setSelectedEdges: (edges: Edge[]) => void
    setAddEdge: (edge: Edge) => void
}