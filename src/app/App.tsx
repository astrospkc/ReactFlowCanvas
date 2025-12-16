import React, { useCallback } from 'react';
import {
  ReactFlow,
  type Node,
  type Edge,
  type OnConnect,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import { NumNode } from '../components/nodes/num-node.tsx';
import { SumNode } from '../components/nodes/sum-node.tsx';

import { DataEdge } from '../components/data-edge.tsx';

import '@xyflow/react/dist/style.css';
import TopBar from '@/layout/TopBar.tsx';
import LeftRail from '@/layout/LeftRail.tsx';

const nodeTypes = {
  num: NumNode,
  sum: SumNode,
};

const initialNodes: Node[] = [
  { id: 'a', type: 'num', data: { value: 0 }, position: { x: 0, y: 0 } },
  { id: 'b', type: 'num', data: { value: 0 }, position: { x: 0, y: 200 } },
  { id: 'c', type: 'sum', data: { value: 0 }, position: { x: 300, y: 100 } },
  { id: 'd', type: 'num', data: { value: 0 }, position: { x: 0, y: 400 } },
  { id: 'e', type: 'sum', data: { value: 0 }, position: { x: 600, y: 400 } },
];

const edgeTypes = {
  data: DataEdge,
};

const initialEdges: Edge[] = [
  {
    id: 'a->c',
    type: 'data',
    data: { key: 'value' },
    source: 'a',
    target: 'c',
    targetHandle: 'x',
  },
  {
    id: 'b->c',
    type: 'data',
    data: { key: 'value' },
    source: 'b',
    target: 'c',
    targetHandle: 'y',
  },
  {
    id: 'c->e',
    type: 'data',
    data: { key: 'value' },
    source: 'c',
    target: 'e',
    targetHandle: 'x',
  },
  {
    id: 'd->e',
    type: 'data',
    data: { key: 'value' },
    source: 'd',
    target: 'e',
    targetHandle: 'y',
  },
];

function Flow() {
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
    <div className="relative h-screen w-screen p-8 bg-gray-50 rounded-xl">
      <div className="absolute top-0 left-0 w-full h-full">
        <TopBar />
      </div>
      <div className='absolute top-[20%] left-10'>
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
      />
    </div>
  );
}

export default function App() {
  return <Flow />;
}