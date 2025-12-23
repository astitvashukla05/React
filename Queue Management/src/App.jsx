import { useState } from "react"
import QueueFrom from "./components/QueueFrom"
import QueueDisplay from "./components/QueueDisplay"

export default function App(){
  const [queue,setQueue]=useState([])

  const addToQueue=(name,service)=>{
    //add data
    setQueue([...queue,{name:name,service:service,id:Date.now(),status:'waiting'}])
  }
   const updateInQueue=(id,status)=>{
     setQueue(queue.map((cust)=>(
      cust.id===id?{...cust,status:status}:cust
     )))
     console.log(queue)

  }
  const removeFromQueue=(id)=>{
    setQueue(queue.filter((cust)=>cust.id!=id))
    
   }

 return (
    <div className="min-h-screen bg-black text-gray-200 px-10 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-indigo-400">
          Queue Management Application
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your customers efficiently
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Form */}
        <QueueFrom onAdd={addToQueue} />

        {/* Right: Queue Display */}
        <div className="md:col-span-2 flex items-start">
          <div className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">
              {<QueueDisplay data={queue} onRemove={removeFromQueue} onStatChange={updateInQueue}/>}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}