import React, { useState } from 'react'

import { Button } from "@chakra-ui/core"

const ReactDemo = () => {
  const [username, setUsername] = useState('')

  const loggingIn = () => setUsername('Riza')

  const loggingOut = () => {
    setUsername('')
  }

  return (
    <div>
      <span>{username}</span>

      <br />
      <Button colorScheme="blue" onClick={loggingIn}>Login</Button>
      <Button colorScheme="red" onClick={loggingOut}>Logout</Button>
    </div>
  )
}

export default ReactDemo