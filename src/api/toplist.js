import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

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