import React from 'react'

const username = ({params}) => {
  return (
    <div className='text-blue-500'>
      {params.username}
    </div>
  )
}

export default username
