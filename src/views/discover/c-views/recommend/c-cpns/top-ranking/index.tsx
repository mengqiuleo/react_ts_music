/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-31 00:36:53
 * @LastEditTime: 2022-12-31 00:55:52
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import { ShallowEqualApp, useAppSelector } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings = [] } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    ShallowEqualApp
  )

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
