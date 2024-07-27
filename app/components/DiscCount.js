import React from 'react'
import { Typography, Button, ElevatedCard, Row } from '@cred/neopop-web/lib/components';
import { FontVariant } from '@cred/neopop-web/lib/primitives';
import {discCountContext, isStartedContext} from '../context/context';
import { useContext } from 'react';
 
function DiscCount() {

  let discCount = useContext(discCountContext)
  let clickSound

    try{
     clickSound = new Audio('/sounds/click.mp3')
    }
    catch{
        
    }
  
  let {isStarted, setIsStarted} = useContext(isStartedContext)

  function increaseDiscCount(){

    clickSound.play()
    if(discCount.discCount==10)
    alert('Thousands of steps will be performed. Please make sure your browser can handle all of it 👻')
    discCount.setDiscCount(discCount.discCount+1)
    setIsStarted(false)
  }

  function decreaseDiscCount(){
    clickSound.play()
    if(discCount.discCount>1)
    discCount.setDiscCount(discCount.discCount-1)
    setIsStarted(false)
  }

  return (
    <ElevatedCard
            backgroundColor="white"
            edgeColors={{
                bottom: 'grey',
                right: 'grey',
            }}
            style={{
                width: '17%',
            }}>
            <Row className='v-justify h-center'>
                <Button
                    variant='primary'
                    kind='flat'
                    onClick={decreaseDiscCount}
                    colorConfig={
                        {
                            backgroundColor: '#2e2d2d'
                        }
                    }
                    textStyle={
                        {
                            fontSize: 32,
                            fontWeight: 'bold'
                        }
                    }
                >
                    -
                </Button>
                <Typography {...FontVariant.HeadingBold20} color="black">
                    {discCount.discCount}
                </Typography>
                <Button
                    variant='primary'
                    kind='flat'
                    onClick={increaseDiscCount}
                    colorConfig={
                        {
                            backgroundColor: '#2e2d2d'
                        }
                    }
                    textStyle={
                        {
                            fontSize: 32,
                            fontWeight: 'bold'
                        }
                    }
                >
                    +
                </Button>
            </Row>
        </ElevatedCard>
  )
}

export default DiscCount