import { useCallback, useEffect } from 'react';
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

import { ServiceNode } from '../components/nodes/ServiceNode.tsx';

import { initialNodes } from './nodes.tsx';

import { DataEdge } from '../components/data-edge.tsx';
import { useNodeStore } from '@/store/useNodeStore.ts';

const nodeTypes = {
    app: ServiceNode,

};

const edgeTypes = {
    data: DataEdge,
};



export default function Flow() {
    const { selectedNodes } = useNodeStore()
    const [nodes, setNodes, onNodesChange] = useNodesState(selectedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useEffect(() => {
        setNodes(selectedNodes)
    }, [selectedNodes])

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
            <div className="absolute  z-10 top-0 left-0 w-full h-full pointer-events-none">
                <TopBar />
            </div>
            <div className='absolute z-10 w-fit  top-[20%] left-10 pointer-events-none'>
                <LeftRail />
            </div>
            <ReactFlow
                onNodeClick={(e) => console.log(e)}
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