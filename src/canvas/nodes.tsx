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
    id: "github",
    type: 'app',
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

  },
  {
    id: 'postgres',
    type: 'app',
    data: {
      icon: <SiPostgresql />,
      service: "PostgreSQL",
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
    position: { x: 0, y: 200 }

  },
  {
    id: 'redis',
    type: 'app',
    data: {
      icon: <LayoutGrid />,
      service: "Redis",
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
    position: { x: 300, y: 100 }

  },
  {
    id: 'mongo',
    type: 'app',
    data: {
      icon: <SiMongodb />,
      service: "MongoDB",
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
    position: { x: 0, y: 400 }

  },
  {
    id: 'services',
    type: 'app',
    data: {
      icon: <Boxes />,
      service: "Services",
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
    position: { x: 200, y: 400 }

  },
  {
    id: 'apps',
    type: 'app',
    data: {
      icon: <FaBuffer />,
      service: "Apps",
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
    position: { x: 600, y: 400 }

  },
  {
    id: 'flow',
    type: 'app',
    data: {
      icon: <GitBranch />,
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
    position: { x: 600, y: 400 }

  },

];