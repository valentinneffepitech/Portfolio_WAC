import React from 'react'

export const Icon = ({
    datas
}) => {
  return (
    <img src={datas.url} title={datas.title}  className='slideIn-left w-full flex-shrink-0 aspect-square rounded p-4'/>
  )
}
