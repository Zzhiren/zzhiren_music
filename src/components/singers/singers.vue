<template>
    <div class="singers">
        <back-title>
            <ButtonGroup class="title" size="small" slot="singers">
                <Button class="button" type="ghost">歌手</Button>
                <Button class="button" type="ghost">我的</Button>
            </ButtonGroup>
        </back-title>

        <div class="types">
            <scroll class="scroll" ref="scroll" :scrollX="scrollX">
                <div class="list">
                    <div v-for="(item, index) in types" v-bind:key="item.index">
                        <span v-html="item"></span>
                    </div>
                </div>
            </scroll>
        </div>
        <!-- <div class="types">

        </div>
        <div class="types">

        </div> -->
    </div>
</template>
<script>
import BackTitle from 'base/back-title/back-title'
import Scroll from 'base/scroll/scroll'
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            title: '歌手',
            scrollX: true,
            types: [
                '全部',
                '华语男',
                '华语女',
                '华语组合',
                '韩国男',
                '韩国女',
                '韩国组合',
                '日本男',
                '日本女',
                '日本组合',
                '欧美男',
                '欧美女',
                '欧美组合',
                '乐团',
                '演奏家',
                '作曲家',
                '指挥家',
                '其他'
            ]
            
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
            if(this.types.length > 0) {
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

.singers {
    max-width: @max-width;
    min-width: @min-width;
    width: 100%;
    position: relative;
    .types {
        background: #f4f4f4;
        width: 100%;
        position: relative;
        height: 30px;
        border-bottom: 1px solid #d6d6d6;
        .scroll {
            width: 100%;
            height: 50px;
            overflow: hidden;
            .list {
                background: red;
                display: flex;s
                div {
                    flex: 1;
                    flex-wrap: nowrap;    
                }
            }
                
        }
    }
    .title {
        margin-top: 10px;
        border-radius: 10px;
        .button {
            width: 60px;
        }
    }
}
</style>
