'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { loader } from '@monaco-editor/react'
import VideoComp from '@/components/videoComp'
import { Header } from '@/components/Header'
// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })
loader.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs' } })

export default function Component() {
  const [url, setUrl] = useState('https://www.youtube.com/embed/ZEKiIwWv9nM?si=EaHeYhwQxdYJ7wwS')
  const [code, setCode] = useState("")
  // write code 
  // on click of run code send to server 
  // compute it and send back response and print the response 
  const runCode = () => {
    const iframe = document.getElementById('preview') as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.document.open()
      iframe.contentWindow.document.write(`
        <pre style="padding: 20px; font-family: 'Fira Code', monospace; white-space: pre-wrap; color: #d4d4d4; background-color: #1e1e1e;">${code}</pre>
      `)
      iframe.contentWindow.document.close()
    }
  }
  return (
    <>
      <Header />
      <div className=" bg-black">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="w-full text-white p-2 bg-black border-[#333333] rounded"
        />
      </div>
      <div className="flex flex-col md:flex-row  h-screen bg-[#1e1e1e]">
        {/* YouTube Video Player */}
        <VideoComp link={url} />
        {/* Code Playground */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col border-l border-[#333333]">
          <div className="flex-1 overflow-hidden">
            <MonacoEditor
              height="100%"
              language="python"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
          <div className="flex justify-between p-4 bg-[#252526]">
            <button
              className="px-6 py-2 bg-[#0e639c] text-white rounded-md hover:bg-[#1177bb] transition-colors duration-200 font-semibold"
              onClick={runCode}
            >
              Run Code
            </button>
          </div>
          <div className="flex-1 border-t border-[#333333] min-h-0">
            <iframe
              id="preview"
              className="w-full h-full bg-[#1e1e1e]"
              title="Code Output"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )}