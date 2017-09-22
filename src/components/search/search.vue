<template>
    <div id="search">
        <Input v-model="value4" icon="ios-search-strong" placeholder="请输入..." class='search'></Input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value4: ''
        }
    }
}
</script>
<style lang="less">
@import '~common/less/skin.less';
@import '~common/less/base.less';

@height: 40px;

#search {
    max-width: @max-width;
    min-width: @min-width;
    height: @height;
    background: @skin-green;
    text-align: center;
    position: relative;
    input {
        background-color: #2bab6d;
        border: 0;
        text-align: center;
    }
    .search {
        width: 98%;
        line-height: @height;
        text-align: center;
        background-color: @skin-green!important;
        i {
            line-height: @height;
        }
    }
}
</style>
