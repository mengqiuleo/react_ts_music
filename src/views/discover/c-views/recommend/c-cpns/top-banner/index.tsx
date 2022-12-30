/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 15:57:36
 * @LastEditTime: 2022-12-30 22:10:44
 */
import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { ShallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    ShallowEqualApp
  )

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) bgImgUrl += '?imageView&blur=40x20'
  return (
    <BannerWrapper bgImgUrl={bgImgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            autoplaySpeed={2000}
            ref={bannerRef}
            afterChange={handleAfterChange}
            dots={false}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.title} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => (
              <li key={item.imageUrl}>
                <span
                  className={classNames('item', {
                    active: index === currentIndex
                  })}
                ></span>
              </li>
            ))}
          </ul>
        </BannerLeft>

        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
