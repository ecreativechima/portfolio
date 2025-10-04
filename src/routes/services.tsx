import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: () => (
    <div>
      <h1>My Services</h1>
      <p>Here are the services I offer...</p>
    </div>
  ),
})
