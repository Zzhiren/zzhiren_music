<template>
    <div class="singers">
        <back-title>
            <ButtonGroup class="title" size="small" slot="singers">
                <Button class="button" type="ghost">歌手</Button>
                <Button class="button" type="ghost">我的</Button>
            </ButtonGroup>
        </back-title>
        <div class="types">

        </div>
        <div class="types">

        </div>
        <div class="types">

        </div>
    </div>
</template>
<script>
import BackTitle from 'base/back-title/back-title'

export default {
    data() {
        return {
            title: '歌手'
        }
    },
    components: {
        BackTitle
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
        height: 30px;
        border-bottom: 1px solid #d6d6d6;
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
