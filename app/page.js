"use client"
import NavBar from "./components/NavBar"
import Stage from "./components/Stage"
import Card from "./components/Card"
import { discCountContext, isStartedContext, stepsContext } from "./context/context"
import { useState } from "react"
import About from "./components/About"




export default function HomePage() {

    let [discCount, setDiscCount] = useState(5)
    let [isStarted, setIsStarted] = useState(false)
    let [steps, setSteps] = useState([1,2])
    let x =[1,2,3,4]

    return <>
        
        <discCountContext.Provider value={{ discCount, setDiscCount }}>
            <stepsContext.Provider value={{ steps, setSteps }}>
                <isStartedContext.Provider value={{ isStarted, setIsStarted }}>
                    <NavBar />
                    <Stage />
                </isStartedContext.Provider>

                <div class='flex gap-10 flex-wrap py-10 justify-around'>
                    <h3 className="w-full text-white text-2xl">Steps: {steps.length}</h3>
        
                        {
                            steps.map((step, index)=><Card step={index+1} a={step[0]} b={step[1]} />)
                        }

                </div>

                <About />
            </stepsContext.Provider>

        </discCountContext.Provider>
    </>
}