import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react'

import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/unstringify/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setInput(value)
    try {
      setOutput(JSON.parse(value))
    } catch (error) {
      setOutput('Invalid JSON string')
    }
  }

  return (
    <main className="p-4">
      <div className="flex gap-4">
        <div className="w-[50%] h-[600px] px-4">
          <Textarea
            placeholder='"{ \"test\": \"value\" }"'
            className="h-[100%]"
            onChange={handleInputChange}
            value={input}
          />
        </div>
        <div className="w-[50%] h-[600px] px-4">
          <Textarea readOnly className="h-[100%]" value={output} />
        </div>
      </div>
    </main>
  )
}
