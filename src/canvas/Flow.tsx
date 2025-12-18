import { useCallback, useEffect } from 'react';
import TopBar from '@/layout/TopBar.tsx';
import LeftRail from '@/layout/LeftRail.tsx';
import {
    ReactFlow,
    addEdge,
    useNodesState,
    useEdgesState,
    Background,
    BackgroundVariant,
    type Connection,
    getIncomers,
    getOutgoers,
    getConnectedEdges,
    type Node,

} from '@xyflow/react';

import { ServiceNode } from '../components/nodes/ServiceNode.tsx';
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
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const onConnect = useCallback(
        (connection: Connection) => {
            setEdges((oldEdges) => addEdge(connection, oldEdges));
        },
        [setEdges],
    );
    const onNodesDelete = useCallback(
        (deleted: Node[]) => {
            setEdges((currentEdges) => {
                setNodes((currentNodes) => {
                    let remainingNodes = [...currentNodes]

                    let nextEdges = deleted.reduce((acc, node) => {
                        const incomers = getIncomers(node, remainingNodes, acc)
                        const outgoers = getOutgoers(node, remainingNodes, acc)
                        const connectedEdges = getConnectedEdges([node], acc)

                        const remainingEdges = acc.filter(
                            (edge) => !connectedEdges.includes(edge)
                        )

                        const createdEdges = incomers.flatMap(({ id: source }) =>
                            outgoers.map(({ id: target }) => ({
                                id: `${source}->${target}`,
                                source,
                                target,
                            }))
                        )

                        remainingNodes = remainingNodes.filter(
                            (rn) => rn.id !== node.id
                        )

                        return [...remainingEdges, ...createdEdges]
                    }, currentEdges)

                    return remainingNodes
                })

                return currentEdges.filter(
                    (edge) =>
                        !deleted.some(
                            (node) =>
                                edge.source === node.id || edge.target === node.id
                        )
                )
            })
        },
        [setEdges, setNodes]
    )

    console.log("edges: ", edges)

    useEffect(() => {
        setNodes(selectedNodes)
    }, [selectedNodes])




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
                onNodesDelete={onNodesDelete}
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