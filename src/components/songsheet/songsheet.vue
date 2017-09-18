<template>
    <div class="song-sheet">
        <div class="title">
            <span>歌单推荐</span>
            <div class="icon">
                <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
            </div>
        </div>
        <div class="list">
            <div>
                <img src="" alt="">
                <span class="title"></span>
            </div>
            <div class="list-middle">2</div>
            <div>3</div>
        </div>
        <div class="list">
            <div>1</div>
            <div class="list-middle">2</div>
            <div>3</div>
        </div>
    </div>
</template>
<script>
import {getSongSheet} from 'api/songsheet'

    export default {
        mounted() {
            this._getSongSheet()
        },
        methods: {
            _getSongSheet() {
                getSongSheet().then((response) => {
                    console.log(response)
                })
                console.log(1)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '~common/less/skin';

    .song-sheet {
        max-width: @max-width;
        min-width: @min-width;
        width: 100%;
        text-align: center;
        .title {
            margin-top: 20px;
            margin-bottom: 10px;
            position: relative;
            .icon {
                display: inline-block;
                border: 1px solid #8B8B83;
                width: 20px;
                height: 20px;
                border-radius: 10px;
                right: 20px;
                position: absolute;
                top: 5px;
                .ios-arrow-right {
                    font-size: 20px;
                    color: #8B8B83;
                }
            }
            span {
                font-size: 20px;
                letter-spacing: 2px;
                color: black;
            }
        }
        .list {
            max-width: @max-width;
            min-width: @min-width;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 8px;
            div {
                flex: 1;
                background: blue;
            }
            div:nth-child(2n) {
                margin-left: 1px;
                margin-right: 1px;
                background: red;
            }
        }
    }
</style>
