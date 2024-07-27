"use client"
import { Typography, Button } from '@cred/neopop-web/lib/components';
import { FontVariant } from '@cred/neopop-web/lib/primitives';
import DiscCount from './DiscCount';
import { run } from './code';
import { useContext, useState } from 'react';
import { discCountContext, isStartedContext } from '../context/context';
import { init, stop } from './code';

function NavBar() {

    let clickSound

    try{
     clickSound = new Audio('/sounds/click.mp3')
    }
    catch{
        
    }


    let discCount = useContext(discCountContext).discCount
    let { isStarted, setIsStarted } = useContext(isStartedContext)
    console.log('IS', isStarted);

    return (
        <div className="bg-black text-white py-6 flex justify-between items-center">
            <div className='flex items-center gap-3'>
                <span>
                    <Typography {...FontVariant.HeadingBold20} color="white">
                        tower of Hanoi
                    </Typography>
                </span>
      

                <a href='https://www.linkedin.com/in/aditya-gupta-970020231/'><img src='images/linkedin_logo.svg'></img></a>
                <a href='https://github.com/aforaditya'><img src='images/github_logo.svg'></img></a>

            </div>
            <DiscCount />
            <Button
                variant="primary"
                kind="elevated"
                size="big"
                colorMode="dark"
                colorConfig={
                    {
                        backgroundColor: !isStarted || isStarted == 'completed' ? "#3BFFAD" : "#EE4D37",
                        color: "black",
                        borderColor: "white"
                    }
                }
                onClick={() => {
                    clickSound.play()
                    setIsStarted(isStarted == 'completed' ? true : !isStarted)
                }}
            >
                {isStarted && isStarted != 'completed' ? '🛑 Stop' : '🚀 Start'}
            </Button>
        </div>
    )
}

export default NavBar