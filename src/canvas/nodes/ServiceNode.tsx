import {
  type Node,
} from '@xyflow/react';

import {
  Boxes,
  LayoutGrid,
  GitBranch
} from "lucide-react"

import { FaGithub, FaBuffer } from "react-icons/fa"
import { SiPostgresql, SiMongodb } from "react-icons/si"

export const initialNodes: Node[] = [
  {
    id: 'a',
    data: {
      icon: <FaGithub />,
      service: "Github",
      rate: "$0.03/HR",
      metrics: {
        cpu: 0.02,
        memory: "0.05 GB",
        disk: "10.00 GB",
        region: 1,
      },
      activeMetric: "CPU", // CPU | Memory | Disk | Region
      slider: {
        min: 0,
        max: 100,
        value: 2,
        unit: "vCPU",
      },
      status: {
        label: "Success",
        type: "healthy",
      },

      provider: "aws",
    },
    position: { x: 0, y: 0 }

  }
];