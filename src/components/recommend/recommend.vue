<template>
    <div class="recommend">
        <div v-if="recommends.length" class="slider-wrapper">
            <slider>
                <div class="slider-item " v-for="(item, index) in recommends" v-bind:key="item.index">
                    <a v-bind:href="item.linkUrl">
                        <img v-bind:src="item.picUrl" alt="">
                    </a>
                </div>
            </slider>
        </div>
        <div class="category">
            <div class="category_items">
                <div class="icon">
                    <Icon type="person" class="i-icon"></Icon>
                </div>
                <div class="span">
                    <span>歌手</span>
                </div>
            </div>
            <div class="category_items">
                <div class="icon">
                    <Icon type="podium" class="i-icon"></Icon>
                </div>
                <div class="span" >
                    <span>排行</span>
                </div>
            </div>
            <div class="category_items">
                <div class="icon">
                    <Icon type="android-wifi" class="i-icon"></Icon>
                </div>
                <div class="span">
<span>电台</span>
                </div>
                
            </div>
        </div>
        <div class="category">
            <div class="category_items">
                <div class="icon">
                    <Icon type="ios-keypad" class="i-icon"></Icon>
                </div>
                <div class="span">
                    <span>分类歌单</span>
                </div>
                
            </div>
            <div class="category_items">
                <div class="icon">
                     <Icon type="social-youtube-outline" class="i-icon"></Icon>
                </div>
                <div class="span">
                   <span>视频MV</span>
                </div>
                
            </div>
            <div class="category_items">
                <div class="icon">
                    <Icon type="social-pinterest-outline" class="i-icon"></Icon>
                </div>
                <div class="span">
                    <span>数字专辑</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import slider from 'base/slider/slider'
import { getRecommend } from 'data/getdata'
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            recommends: [],
            xxx: [1,23]
        }
    },
    components: {
        slider
    },
    created() {
        this._getRecommends()
    },
    methods: {
        _getRecommends() {
            getRecommend().then(response => {
                this.recommends = response.data.data.slider
            })
            // this.setMusic_hall_refresh(recommends)
            console.log(this.xxx)
            this.set(this.xxx)
        
        },
        ...mapMutations({
        set: 'SET'
      })
    }
}

</script>
<style lang="less" scoped>
@import '~common/less/skin';

@div-height: 40px;

.slider-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.category {
    width: 100%;
    display: flex;
    justify-content: center;
    .category_items {
        margin-top: 10px;
        justify-content: center;
        flex: 1;
        flex-wrap: wrap;
        text-align: center;
        height: @div-height;
        vertical-align: middle;
        div {
            line-height: @div-height;
        }
        .span {
            line-height: @div-height;
            // width: 100px;
            text-align: left;
            span {
                margin-left: 10px;
            }
        }
        .i-icon {
            color: @skin-green;
            font-size: 25px;
        }
        .icon {
            margin-top: 5px;
            margin-left: 25px;
            width: 20px;
            float: left;
        }
    }
}
</style>
