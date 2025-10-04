import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
  component: () => (
    <div>
      <h1>My Skills</h1>
      <p>Here are my technical skills...</p>
    </div>
  ),
})