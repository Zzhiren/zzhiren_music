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
        page: 'other',
        inCharset: 'utf-8',
        outCharset: 'GB2312'

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
        inCharset: 'utf-8',
        outCharset: 'GB2312',
    })
    return jsonp(url, data, options)
}

//新歌速递
export function getNewSongs() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

    const date = getDate()

    const data = Object.assign({}, commonParams, {
        tpl: 3,
        page: 'detail',
        date: date,
        topid: 27,
        type: 'top',
        song_begin: 0,
        song_num: 30,
        inCharset: 'utf8',
        outCharset: 'utf-8'
        

    })
    return jsonp(url, data, options)
}

//获取日期
function getDate() {
    var myDate = new Date();
    var month = parseInt(myDate.getMonth()+1)>9? parseInt(myDate.getMonth()+1) : '0'+parseInt(myDate.getMonth()+1)
    var date = myDate.getFullYear() + '-' + month + '-' + parseInt(myDate.getDate()-1)
    return date
}


export function getMvList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'

    const data = Object.assign({}, commonParams, {
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        utf8: 1,
        type: 2,
        year: 0,
        area: 0,
        tag: 0,
        pageno: 0,
        pagecount: 20,
        otype: 'json',
        taglist: 1
    })
    return jsonp(url, data, options)
}



export function getDataList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

    const data = Object.assign({}, commonParams, {
        tpl: 'v12',
        page: 'other',
        rnd: 9311333933901744
    })

    return jsonp(url, data, options)
}