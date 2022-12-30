/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:26:04
 * @LastEditTime: 2022-12-26 04:26:36
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
