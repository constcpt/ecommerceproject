<template>
  <div class="wrapper">
    <img class="wrapper__img" src="https://i.imgur.com/ckVagRx.png" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="User name" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="Password" type="password" autocomplete="new-password"
        v-model="password" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="Confirm password" v-model="ensurement" />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">Sign up</div>
    <div class="wrapper__register-link" @click="handleLoginClick">Already have an account to login?</div>
    <toast v-if="show" :message="toastMessage" />
  </div>
</template>
  
<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../../utils/request';
import toast, { useToastEffect } from '../../components/toast';

// 处理注册逻辑，注册相关的逻辑均封装在 useRegisterEffect 中
const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })

  const handleRegister = async () => {
    // 校验用户名和密码是否为空，以及两次输入的密码是否一致
    if (!data.username) {
      showToast('Please enter your username');
      return;
    }
    if (!data.password) {
      showToast('Please enter your password');
      return;
    }
    if (data.password !== data.ensurement) {
      showToast('The two passwords are inconsistent');
      return;
    }
    // 发送注册请求
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      });
      // 注册成功应当跳转到登录页面
      if (result?.errno === 0) {
        router.push({ name: 'Login' });
      } else {
        showToast('Sign up failed');
      }
    } catch (e) {
      showToast('Request failed');
    }
  }
  const { username, password, ensurement } = toRefs(data);
  return { username, password, ensurement, handleRegister };
}

// 处理注册页点击 Already have an account to login? 跳转到登录页的逻辑均封装在 useLoginEffect 中
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: 'Login' });
  }
  return { handleLoginClick };
}

export default {
  name: 'RegisterPage',
  components: { toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();
    return {
      username, password, ensurement, show, toastMessage,
      handleRegister, handleLoginClick
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

    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__register-button {
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

  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>