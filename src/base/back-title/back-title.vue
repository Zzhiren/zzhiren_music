<template>
    <div class="back_title">
        <Icon type="ios-arrow-left" class="arrow-left"></Icon>
        <slot class="singers" name="singers"></slot>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
  
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';
@height: 44px;

.back_title {
    max-width: @max-width;
    min-width: @min-width;
    width: 100%;
    height: @height;
    background: @skin-green;
    position: relative;
    text-align: center;
    .arrow-left {
        color: white;
        font-size: 24px;
        line-height: @height;
        left: 20px;
        font-weight: 100;
        position: absolute;
    }
    .title {
        line-height: @height;
        font-size: 20px;
    }
    .singers {
        margin-top: 10px;
        position: relative;
    }
}

</style>
