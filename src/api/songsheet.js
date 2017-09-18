import jsonp from 'data/jsonp'
import {commonParams, options} from './config'

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