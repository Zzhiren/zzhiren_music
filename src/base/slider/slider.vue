<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot>
            </slot>
        </div>
        <div class="dots">
            <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item,index) in dots" v-bind:key="index"></span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
    name: 'slider',
    data() {
        return {
            dots: [],
            currentPageIndex: 0
        }
    },
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 4000
        },
        showDot: {
            type: Boolean,
            default: true
        },
        click: {
            type: Boolean,
            default: true
        }
        

        
    },
    mounted() {
        setTimeout(() => {
            this._setSliderWidth()
            this._initDots()
            this._initSlider()

            if (this.autoPlay) {
                this._play()
            }
        }, 20)
    },
    methods: {
        _setSliderWidth() {
            this.children = this.$refs.sliderGroup.children //获取slidergroup的子元素
            let width = 0
            let sliderWidth = this.$refs.slider.clientWidth //slider的宽度
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                child.style.width = sliderWidth + 'px'
                width += sliderWidth
            }
            if (this.loop) {
                width += 2 * sliderWidth
            }
            this.$refs.sliderGroup.style.width = width + 'px'
        },
        _initDots() {
            this.dots = new Array(this.children.length)
        },
        _initSlider() {
            this.slider = new BScroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: 0.3,
                    speed: 400
                },
                click: this.click
            })

            this.slider.on('scrollEnd', () => {
                let pageIndex = this.slider.getCurrentPage().pageX
                if(this.loop) {
                    pageIndex -= 1
                }
                this.currentPageIndex = pageIndex
                if (this.autoPlay) {
                    clearTimeout(this.timer)
                    this._play()
                }
            })
        },
        _play() {
            let pageIndex = this.currentPageIndex +1
            if (this.loop) {
                pageIndex += 1
            }
            this.timer = setTimeout(() => {
                this.slider.goToPage(pageIndex, 0, 400)
            }, this.interval)
        }
    }
}
</script>
<style lang="less" scoped>
.slider {
    min-height: 1px;
    position: relative;
    .slider-group {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        .slider-item {
            float: left;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
            a {
                display: block;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .dots {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        text-align: center;
        font-size: 0;
        .dot {
            display: inline-block;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            &.active {
                width: 20px;
                border-radius: 5px;
                background: rgba(255, 255, 255, 0.8);
            }
        }
    }
}
</style>
