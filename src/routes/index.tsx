import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const quotes = [
    'Simplicity is the soul of efficiency. – Austin Freeman',
    'First, solve the problem. Then, write the code. – John Johnson',
    'Experience is the name everyone gives to their mistakes. – Oscar Wilde',
    'Code is like humor. When you have to explain it, it’s bad. – Cory House',
    'Fix the cause, not the symptom. – Steve Maguire',
    'Optimism is an occupational hazard of programming. – Kent Beck',
    'When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler',
    'Before software can be reusable it first has to be usable. – Ralph Johnson',
    'Make it work, make it right, make it fast. – Kent Beck',
    'Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler',
    'Testing leads to failure, and failure leads to understanding. – Burt Rutan',
    'The best error message is the one that never shows up. – Thomas Fuchs',
    'Deleted code is debugged code. – Jeff Sickel',
    'The most disastrous thing that you can ever learn is your first programming language. – Alan Kay',
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    'The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon',
    'Talk is cheap. Show me the code. – Linus Torvalds',
    'It’s not a bug – it’s an undocumented feature. – Anonymous',
  ]

  const [quoteIndex, setQuoteIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setFade(false)
    const timeout = setTimeout(() => setFade(true), 100) // fade in after quote changes
    return () => clearTimeout(timeout)
  }, [quoteIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length)
      }, 400) // match fade-out duration
    }, 9000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full overflow-hidden pointer-events-none">
      <div className="text-center p-4 w-full max-w-2xl mx-auto pointer-events-auto z-10">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
            JSON
          </span>{' '}
          Tools
        </h1>
        <div
          className={`mt-8 text-lg italic text-gray-400 min-h-[48px] transition-opacity duration-400 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {quotes[quoteIndex]}
        </div>
      </div>
    </div>
  )
}
