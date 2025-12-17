import { useCallback } from 'react';
import TopBar from '@/layout/TopBar.tsx';
import LeftRail from '@/layout/LeftRail.tsx';
import { initialEdges } from '@/canvas/edges.ts';
import {
    ReactFlow,
    type OnConnect,
    addEdge,
    useNodesState,
    useEdgesState,
    Background,
    BackgroundVariant,

} from '@xyflow/react';

import { AppNode } from '../components/nodes/app-node.tsx';

import { initialNodes } from './nodes.tsx';

import { DataEdge } from '../components/data-edge.tsx';

const nodeTypes = {
    app: AppNode,

};

const edgeTypes = {
    data: DataEdge,
};



export default function Flow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback(
        (params) => {
            setEdges((edges) =>
                addEdge({ type: 'data', data: { key: 'value' }, ...params }, edges),
            );
        },
        [setEdges],
    );

    return (
        <div className="relative h-screen w-screen p-8 bg-slate-950 rounded-xl">
            <div className="absolute  z-10 top-0 left-0 w-full h-full">
                <TopBar />
            </div>
            <div className='absolute z-10 w-fit  top-[20%] left-10'>
                <LeftRail />
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            >
                <Background color='white' variant={BackgroundVariant.Dots} />
            </ReactFlow>
        </div>
    );
}