<template>
    <div class="wrapper">
        <img class="wrapper__img" src="https://i.imgur.com/ckVagRx.png" />
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="User name " v-model="username" />
        </div>
        <div class="wrapper__input">
            <input 
                class="wrapper__input__content" 
                placeholder="Password" 
                type="password" 
                v-model="password" 
                autocomplete="new-password"
            />
        </div>
        <div class="wrapper__login-button" @click="handleLogin">Sign in</div>
        <div class="wrapper__login-link" @click="handleRegisterClick">Sign up</div>
        <toast v-if="show" :message="toastMessage" />
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../../utils/request'
import toast, { useToastEffect } from '../../components/toast';

// 处理登录跳转逻辑，Login 相关的逻辑均封装在 useLoginEffect 函数里
const useLoginEffect = (showToast) => {
    const router = useRouter();
    const data = reactive({ username: '', password: '' });
    const handleLogin = async () => {
        // 对用户输入的数据进行校验
        if (!data.username ) {
            showToast('Please enter your user name!');
            return;
        }
        if (!data.password) {
            showToast('Please enter your password!');
            return;
        }
        // 发送登录请求
        try {
            const result = await post('/api/user/login', {
                username: data.username,
                password: data.password
            });
            if (result?.errno === 0) {
                localStorage.isLogin = true;
                router.push({ name: 'Home' });
            } else {
                showToast('Sign in failed');
            }
        } catch (error) {
            showToast('Request failed');
        }
    };
    const { username, password } = toRefs(data);
    return { username, password, handleLogin };
}

// 处理注册跳转，Register 相关的逻辑均封装在 useRegisterEffect 函数里
const useRegisterEffect = () => {
    const router = useRouter();
    const handleRegisterClick = () => {
        router.push({ name: 'Register' })
    };
    return { handleRegisterClick };
};

export default {
    name: 'LoginPage',
    components: { toast },
    // setup 函数的职责就是显示代码执行的流程，没有过多的业务逻辑
    setup() {
        const { show, toastMessage, showToast } = useToastEffect();
        const { username, password, handleLogin } = useLoginEffect(showToast);
        const { handleRegisterClick } = useRegisterEffect();

        return {
            username, password, show, toastMessage,
            handleLogin, handleRegisterClick
        };
    }
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
        color: $bgColor;
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
