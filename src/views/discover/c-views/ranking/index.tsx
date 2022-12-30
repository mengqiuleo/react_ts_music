/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:25:49
 * @LastEditTime: 2022-12-26 04:25:57
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
