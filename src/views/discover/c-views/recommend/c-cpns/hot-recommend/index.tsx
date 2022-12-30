/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-30 22:26:59
 * @LastEditTime: 2022-12-31 00:09:01
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { ShallowEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommed: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    ShallowEqualApp
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommend?.map((item: any) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommed)
