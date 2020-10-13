import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { ipcRenderer } from 'electron'

const MESSAGE = 'Howdy'

const Box = styled.div`
  height: 100px;
  width: 100px;
  background: hsl(200, 80%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const App = () => {
  const sendMessage = () => {
    ipcRenderer.send('message-send', MESSAGE)
  }

  return (
    <Fragment>
      <h1>Parcel React Electron Starter</h1>
      <Box>A Blue Box styled with emotion</Box>
      <button
        onClick={
          sendMessage
        }>{`Say "${MESSAGE}" from the other side! 👋`}</button>
    </Fragment>
  )
}

export default App
