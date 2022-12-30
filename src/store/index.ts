/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 11:32:34
 * @LastEditTime: 2022-12-28 15:46:53
 */
import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

//# ts的类型
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

//# useDispatch 和 useSelector 的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const ShallowEqualApp = shallowEqual

export default store
