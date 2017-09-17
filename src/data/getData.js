import axios from 'axios'

//推荐api https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
 // https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?
// g_tk=5381&
// uin=0&
// format=json&
// inCharset=utf-8&
// outCharset=utf-8&
// notice=0&
// platform=h5&
// needNewCode=1&_
// =1505638576329
export function getRecommend() {
    return axios.get('/api/getDiscList', {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: 1505638576329
    })
}