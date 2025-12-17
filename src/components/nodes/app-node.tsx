import { type Node, type NodeProps, Position, useReactFlow } from '@xyflow/react';
import { useCallback } from 'react';

import {
    BaseNode,
    BaseNodeContent,
    BaseNodeFooter,
    BaseNodeHeader,
    BaseNodeHeaderTitle,
} from '../base-node';
import { LabeledHandle } from '../labeled-handle';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,

    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';



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
export type AppNode = Node<{
    details: Details;
}>;





export function AppNode({ id, data }: NodeProps<AppNode>) {
    const { updateNodeData, setNodes } = useReactFlow();

    const handleReset = useCallback(() => {
        console.log("reset")
    }, [id, updateNodeData]);

    const handleDelete = useCallback(() => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
    }, [id, setNodes]);

    const handleIncr = useCallback(() => {
        console.log("incre")
    }, []);

    const handleDecr = useCallback(() => {
        console.log("decr")
    }, []);

    return (
        <BaseNode className='bg-slate-800'>
            <BaseNodeHeader className="border-b">
                <span>{data.details.icon}</span>
                <BaseNodeHeaderTitle>{data.details.service}</BaseNodeHeaderTitle>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="nodrag p-1"
                            aria-label="Node Actions"
                            title="Node Actions"
                        >
                            <EllipsisVertical className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="font-bold">Applications</DropdownMenuLabel>

                    </DropdownMenuContent>
                </DropdownMenu>
            </BaseNodeHeader>

            <BaseNodeContent>
                <div className="flex gap-2 items-center">
                    <Button onClick={handleDecr}>-</Button>
                    {/* <pre>{String(data.value).padStart(3, ' ')}</pre> */}
                    <Button onClick={handleIncr}>+</Button>
                </div>
            </BaseNodeContent>

            <BaseNodeFooter className="bg-gray-100 items-end px-0 py-1 w-full  rounded-b-md">
                <LabeledHandle title="out" type="source" position={Position.Right} />
            </BaseNodeFooter>
        </BaseNode>
    );
}