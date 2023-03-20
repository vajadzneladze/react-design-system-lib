import React from 'react'

export interface FlexProps {
  children: JSX.Element[]
}

const Flex = ({ children }: FlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  )
}

export default Flex
