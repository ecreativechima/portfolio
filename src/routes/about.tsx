import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div>
      <h1>My Projects</h1>
      <p>Here are my projects...</p>
    </div>
  ),
})