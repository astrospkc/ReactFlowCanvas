import type { Node } from "@xyflow/react";

export interface useAppStoreType {
    selectedApp: string,
    setSelectedApp: (app: string) => void
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


export type UseNodeStoreType = {
    selectedNode: string,
    setSelectedNode: (node: string) => void,
    nodes: string[],
    setNodes: (nodes: string[]) => void,
    addNode: (node: string) => void,
    removeNode: (node: string) => void,
    updateNode: (node: string) => void
}