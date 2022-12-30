/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:26:59
 * @LastEditTime: 2022-12-26 04:27:04
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
