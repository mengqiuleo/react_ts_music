/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 15:43:41
 * @LastEditTime: 2022-12-31 00:51:22
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     const res = await getBanner()
//     dispatch(changeBannersAction(res.banners)) //res. 后面的东西取决于返回的东西是什么
//   }
// )

// export const fetchHotRecommend = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumAction(res.albums))
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getBanner().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }

    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: IRecommendState = {
  // 这里面放初始化数据
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions

export default recommendSlice.reducer
