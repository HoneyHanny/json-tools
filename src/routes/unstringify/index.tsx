import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react'

import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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

  const handleCopy = () => {
    if (!output) {
      toast.error('Nothing copied to clipboard.')
      return
    }

    if (output === 'Invalid JSON string') {
      toast.error('Cannot copy invalid JSON string.')
      return
    }

    navigator.clipboard.writeText(output).then(
      () => {
        toast.success('Output copied to clipboard!')
      },
      () => {
        toast.error('Failed to copy output to clipboard.')
      },
    )
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
          <Button
            onClick={handleCopy}
            className="absolute right-[40px] top-[75px]"
            size="sm"
            variant={'outline'}
          >
            Copy
          </Button>
          <Textarea
            readOnly
            className="h-[100%]"
            value={output}
            placeholder='{ "test": "value" }'
          />
        </div>
      </div>
    </main>
  )
}
