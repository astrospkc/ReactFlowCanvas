import { type NodeProps, Position, useReactFlow } from '@xyflow/react';
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
import clsx from "clsx"

import type { ServiceNode } from '@/types/types';



export function ServiceNode({ id, data }: NodeProps<ServiceNode>) {

    console.log("data in app node: ", data.service)
    // const { updateNodeData, setNodes } = useReactFlow();

    return (
        <>
            <BaseNode className="bg-black text-white w-[340px] rounded-xl">
                {/* Header */}
                <LabeledHandle title="in" type="target" position={Position.Top} />
                <BaseNodeHeader className="flex items-center justify-between border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-7 h-7 flex items-center justify-center rounded"

                        >
                            {data.icon}
                        </div>
                        <BaseNodeHeaderTitle>{data.service}</BaseNodeHeaderTitle>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs rounded border border-green-500 text-green-400">
                            {data.rate}
                        </span>
                        <Button variant="ghost" className="nodrag p-1">
                            <EllipsisVertical className="size-4" />
                        </Button>
                    </div>
                </BaseNodeHeader>

                {/* Content */}
                <BaseNodeContent className="space-y-3">
                    <div className="grid grid-cols-4 text-xs text-neutral-400">
                        <span>{data.metrics.cpu}</span>
                        <span>{data.metrics.memory}</span>
                        <span>{data.metrics.disk}</span>
                        <span>{data.metrics.region}</span>
                    </div>

                    <div className="flex gap-1 bg-neutral-800 rounded-lg p-1 text-xs">
                        {["CPU", "Memory", "Disk", "Region"].map(tab => (
                            <button
                                key={tab}
                                className={clsx(
                                    "flex-1 py-1 rounded-md",
                                    data.activeMetric === tab
                                        ? "bg-white text-black"
                                        : "text-neutral-400"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={data.slider.min}
                            max={data.slider.max}
                            value={data.slider.value}
                            readOnly
                            className="flex-1 accent-blue-500"
                        />
                        <input
                            type="number"
                            value={data.slider.value / 100}
                            readOnly
                            className="w-14 bg-neutral-800 rounded px-2 py-1 text-xs"
                        />
                    </div>
                </BaseNodeContent>

                {/* Footer */}
                <BaseNodeFooter className="flex items-center justify-between px-3 py-2 border-t border-neutral-800">
                    <span
                        className={clsx(
                            "px-2 py-0.5 text-xs rounded",
                            data.status.type === "healthy"
                                ? "bg-green-900 text-green-400"
                                : "bg-red-900 text-red-400"
                        )}
                    >
                        ● {data.status.label}
                    </span>

                    <span className="text-orange-400 font-semibold text-sm">
                        {data.provider.toUpperCase()}
                    </span>

                    <LabeledHandle title="out" type="source" position={Position.Bottom} />
                </BaseNodeFooter>
            </BaseNode>
        </>

    );
}