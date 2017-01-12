import api from '../../../api'

/**
 * 获取即将开始电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchComingSoonLists = ({ commit }, page, count) => {
  return api.fetchComingSoonLists(page, count, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_COMING_SOON_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取正在热映电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchNowPlayingLists = ({ commit }, page, count) => {
  return api.fetchNowPlayingLists(page, count, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_NOW_PLAYING_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取电影详情
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchFilmDetail = ({commit}, id) => {
  return api.fetchFilmDetail(id, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_DETAIL_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_DETAIL failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取广告
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchBillboards = ({commit}) => {
  return api.fetchBillboards(commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_BANNER_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
