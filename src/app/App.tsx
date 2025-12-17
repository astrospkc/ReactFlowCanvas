import { useEffect } from 'react'

import '@xyflow/react/dist/style.css';
import Flow from '../canvas/Flow';

export default function App() {


  // const server = setupServer(...handlers)
  // server.listen()

  useEffect(() => {
    const fetchnodes = async () => {
      const response = await fetch('/api/user')
      const data = await response.json()
      console.log(data)
    }
    fetchnodes()
  }, [])

  return (
    <>
      <Flow />
    </>
  )
}