import React from 'react'

export const Icon = ({
    datas
}) => {
  return (
    <img src={datas.url} title={datas.title}  className='slideIn-left h-24 md:h-40 lg:h-60'/>
  )
}
