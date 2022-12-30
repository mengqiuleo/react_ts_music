/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-30 22:22:57
 * @LastEditTime: 2022-12-30 22:23:04
 */
import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;

    > .left {
      padding: 20px;
      width: 729px;
      box-sizing: border-box;
    }

    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`
