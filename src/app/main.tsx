import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "../index.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}
const queryClient = new QueryClient()
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("../mocks/browser")
    await worker.start({ onUnhandledRequest: "bypass" })
  }
}

enableMocking().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  )
})