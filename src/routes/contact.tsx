import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div>
      <h1>Contact Me</h1>
      <p>This is the contact section of my portfolio.</p>
    </div>
  ),
})
