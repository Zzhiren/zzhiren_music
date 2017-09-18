import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

//歌单推荐
export function getSongSheet() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        loginUin: 0,
        hostUin: 0,
        needNewCode: 1,
        tpl: 'v12',
        page: 'other'

    })

    return jsonp(url,data,options)
}

//每日推荐30首歌
export function getTopList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

    const data = Object.assign({}, commonParams, {
        tpl: 3,
        page: 'detail',
        topid: 26,
        date: '2017_37',
        topid: 26,
        type: 'top',
        song_begin: 0,
        song_num: 30,
    })

    return jsonp(url, data, options)
}