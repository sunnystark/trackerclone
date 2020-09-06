import React from 'react'
import styled from 'styled-components'

import Kbd from '../common/Kbd'

const Container = styled.div`
  padding: 8px 8px 16px 8px;
  text-align: center;
`

const Line = styled.div`
  line-height: 28px;
  color: #838689;
`

class Instructions extends React.PureComponent {
  render() {
    return (
      <Container>
        <Line>
         For any information and suggestion mail me <Kbd>@SunnyStark19@gmail.com</Kbd>
        </Line>
        <Line>
         just drag the list of item suggest components <Kbd>Use mouse left click</Kbd>
        </Line>
      </Container>
    )
  }
}

export default Instructions
