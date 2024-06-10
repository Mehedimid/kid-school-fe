import React from 'react'

const layout = ({children}) => {
  return (<>
      <h1>Navbar</h1>
      <div>{children}</div>
      <h2>Footer</h2>
  </>

  )
}

export default layout