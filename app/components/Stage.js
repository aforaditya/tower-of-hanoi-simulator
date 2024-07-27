import React, { useContext, useEffect } from 'react'
import { ElevatedCard, Column } from '@cred/neopop-web/lib/components';
import { init, run, stop } from './code';
import {discCountContext, isStartedContext, stepsContext} from '../context/context';

function Stage() {

    let noOfDiscs = useContext(discCountContext).discCount
    let {isStarted, setIsStarted} = useContext(isStartedContext)
    let {steps, setSteps} = useContext(stepsContext)

    useEffect(()=>{
        console.log("IS STARTED", isStarted);
        if(isStarted && isStarted!='completed'){
         init(noOfDiscs)
         run()
         .then(res=>{
            setIsStarted('completed')
         })
        }
        else if(isStarted=='completed'){
            stop()
        }
        else{
            stop()
            let steps = init(noOfDiscs);
            console.log('STEPS', steps);
            setSteps(steps)
        }
    }, [noOfDiscs, isStarted])



    return (
        <div className="flex justify-center">
            <ElevatedCard
                backgroundColor="white"
                style={
                    {
                        width: '100%',
                    }
                }
            >

                <div className="main">
                    <div className="tower-box">
                        <div className="block">
                            <div className="tower"></div>
                            <div className="bar"></div>
                        </div>
                        <div className="block">
                            <div className="tower"></div>
                            <div className="bar"></div>
                        </div>
                        <div className="block">
                            <div className="tower"></div>
                            <div className="bar"></div>
                        </div>
                    </div>

                    <div className="play-box">

                    </div>
                </div>

            </ElevatedCard>
        </div>
    )
}

export default Stage