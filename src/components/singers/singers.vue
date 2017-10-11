<template>
    <div class="singers">
        <back-title>
            <ButtonGroup class="title" size="small" slot="singers">
                <Button class="button" type="ghost">歌手</Button>
                <Button class="button" type="ghost">我的</Button>
            </ButtonGroup>
        </back-title>

        <div class="types">
            <scroll class="scroll" ref="scroll" :scrollY="scrollY" :scrollX="scrollX">
                <div>
                    <div class="button" v-for="(item, index) in types.locationTypes" v-bind:key="item.index">
                        <span v-html="item" v-bind:class="{ firstspan: index == 0 }"></span>
                    </div>
                </div>
            </scroll>
        </div>
        <div class="types">
            <scroll class="scroll" ref="scroll" :scrollY="scrollY" :scrollX="scrollX">
                <div>
                    <div class="button" v-for="(item, index) in types.sexTypes" v-bind:key="item.index">
                        <span v-html="item" v-bind:class="{ firstspan: index == 0 }"></span>
                    </div>
                </div>
            </scroll>
        </div>
        <div class="types">
            <scroll class="scroll" ref="scroll" :scrollY="scrollY" :scrollX="scrollX">
                <div>
                    <div class="button" v-for="(item, index) in types.musicTypes" v-bind:key="item.index">
                        <span v-html="item" v-bind:class="{ firstspan: index == 0 }"></span>
                    </div>
                </div>
            </scroll>
        </div>
        
    </div>
</template>
<script>
import BackTitle from 'base/back-title/back-title'
import Scroll from 'base/scroll/scroll'
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            title: '歌手',
            scrollX: true,
            scrollY: false,
            types: {
                "locationTypes": ['全部', '华语男', '华语女', '华语组合', '韩国男', '韩国女', '韩国组合', '日本男', '日本女', '日本组合', '欧美男', '欧美女', '欧美组合', '乐团', '演奏家', '作曲家', '指挥家', '其他'],
                "sexTypes": ['全部', '男', '女', '组合'],
                "musicTypes": ['全部', '流行', '嘻哈', '摇滚', '电子', '民谣', '轻音乐', '爵士', '古典', '乡村', '蓝调']
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this._scrollRefresh()
        }, 5000);
    },
    components: {
        BackTitle,
        Scroll
    },
    methods: {
        _scrollRefresh() {
            if (this.types.length > 0) {
                this.scrollRefresh('xxx')
            }
        },
        ...mapMutations({
            scrollRefresh: 'SCROLL_REFRESH'
        })
    }
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';

@height: 50px;

.singers {
    max-width: @max-width;
    min-width: @min-width;
    width: 100%;
    position: relative;
    .types {
        background: #f4f4f4;
        width: 100%;
        position: relative;
        height: @height;
        border-bottom: 1px solid #d6d6d6;
        .scroll {
            width: 100%;
            height: @height;
            overflow: hidden;
            div {
                display: inline-block !important;
                height: 50px;
                white-space: nowrap;
                .button {
                    display: inline-block;
                    padding-left: 10px;
                    padding-right: 10px;
                    // &:active {
                    //     background: red;
                    // }
                    span {
                        line-height: @height;
                        font-size: 16px;
                    }
                    .firstspan {
                        color: @skin-green;
                    }
                }
            }
        }
    }
    .title {
        margin-top: 6px;
        border-radius: 10px;
        .button {
            width: 80px;
            height: 30px;
        }
    }
}
</style>
