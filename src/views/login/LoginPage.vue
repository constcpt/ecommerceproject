<template>
    <div class="wrapper">
        <img class="wrapper__img" src="https://i.imgur.com/ckVagRx.png" />
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="Email or phone number " />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="Password" type="password" />
        </div>
        <div class="wrapper__login-button">Sign in</div>
        <div class="wrapper__login-link">Sign up</div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    &__img {
        display: block;
        margin: 0 auto .4rem auto;
        width: .94rem;
        height: .94rem;
    }

    &__input {
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        padding: 0 .16rem;
        background: #F9F9F9;
        border: 1px solid rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        border-radius: 6px;
        font-size: .16rem;

        &__content {
            width: 100%;
            line-height: .48rem;
            border: none;
            outline: none;
            background: none;
            color: $content-notice-fontcolor;

            &::placeholder {
                color: #999;
            }
        }
    }

    &__login-button {
        // 注意 margin 在竖直方向上有塌陷现象，所以上 margin 为 32 而不是 16
        margin: .32rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: #3194d0;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
        border-radius: .04rem;
        border-radius: .04rem;
        color: #fff;
        font-size: .16rem;
        text-align: center;
    }

    &__login-link {
        text-align: center;
        font-size: .14rem;
        color: $content-notice-fontcolor;
    }
}
</style>
