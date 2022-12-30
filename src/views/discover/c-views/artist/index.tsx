/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:26:44
 * @LastEditTime: 2022-12-26 04:26:53
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
