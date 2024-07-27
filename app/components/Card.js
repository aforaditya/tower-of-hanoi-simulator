import React from 'react'
import {ElevatedCard, Column, Tag, Typography} from '@cred/neopop-web/lib/components';

function Card({step , a, b}) {
  return (
    <ElevatedCard className='step_card'
    style={{
        width: '22%',
        padding: '10px'
    }}
    edgeColors={{
        bottom: 'white',
        right: 'white'
    }}
    
    >
       <Column>
        <Tag>Step {step}</Tag>
        <Typography>Move</Typography>
        <label className="text-white text-2xl">{a} to {b}</label>
       </Column>
    </ElevatedCard>
  )
}

export default Card