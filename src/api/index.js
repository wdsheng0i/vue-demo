import vue from 'vue'

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (query) {
    _url = `http://m.maizuo.com/v4/api${url}?${query}`
  } else {
    _url = `http://m.maizuo.com/v4/api${url}`
  }
  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

export default {
  fetchComingSoonLists: function (page, count, commit) {
    const url = '/film/coming-soon'
    const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
    return _get({ url, query }, commit)
  },
  fetchNowPlayingLists: function (page, count, commit) {
    const url = '/film/now-playing'
    const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
    return _get({ url, query }, commit)
  },
  fetchFilmDetail: function (id, commit) {
    const url = '/film/' + id
    const query = '_t=' + new Date().getTime()
    return _get({ url, query }, commit)
  },
  fetchBillboards: function (commit) {
    const url = '/billboard/home'
    const query = '_t=' + new Date().getTime()
    return _get({ url, query }, commit)
  }
}
