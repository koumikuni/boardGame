'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { generateTasks } from '../utils/tasks'

export default function Home() {
  const [messages, setMessages] = useState<string[]>([])

  const generateMessages = () => {
    const newMessages = generateTasks()
    setMessages(newMessages)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">ランダムタスク生成器</h1>
        
        <div className="mb-8">
          {messages.map((message, index) => (
            <p key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">{message}</p>
          ))}
        </div>
        
        <Button 
          onClick={generateMessages}
          className="w-full"
        >
          タスクを生成
        </Button>
      </div>
    </main>
  )
}

