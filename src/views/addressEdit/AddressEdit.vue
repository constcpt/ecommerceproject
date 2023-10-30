<template>
  <div class="wrapper">
    <Toast v-if="show" :message="toastMessage" />
    <div class="title">
      <div class="iconfont" @click="handleBackClick">
        &#xe600;
      </div>
      {{ isEdit ? "Edit" : "New" }} Address
      <span class="title__save" @click="handleSaveClick">Save</span>
    </div>
    <div class="content">
      <div class="content__item">
        <span class="content__item__label">City:&nbsp;</span>
        <input class="content__item__input" placeholder="enter your city" v-model="city" />
      </div>
      <div class="content__item">
        <span class="content__item__label">Department:&nbsp;</span>
        <input class="content__item__input" placeholder="enter neighborhood/building/school" v-model="department" />
      </div>
      <div class="content__item">
        <span class="content__item__label">House Number:&nbsp;</span>
        <input class="content__item__input" placeholder="enter the building number - door number" v-model="houseNumber" />
      </div>
      <div class="content__item">
        <span class="content__item__label">Name:&nbsp;</span>
        <input class="content__item__input" placeholder="enter the consignee" v-model="name" />
      </div>
      <div class="content__item">
        <span class="content__item__label">Phone Number:&nbsp;</span>
        <input class="content__item__input" placeholder="enter a contact number" v-model="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { get, post, patch } from '../../utils/request';
import Toast, { useToastEffect } from '../../components/toast.vue';

// 点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { router, handleBackClick }
}

export default {
  name: 'AddressEdit',
  components: { Toast },
  setup() {
    const route = useRoute();
    const id = route.query.id;
    const city = ref('');
    const department = ref('');
    const houseNumber = ref('');
    const name = ref('');
    const phone = ref('');
    const { show, toastMessage, showToast } = useToastEffect()
    const { router, handleBackClick } = useBackRouterEffect();

    onBeforeMount(async () => {
      if (id) {
        const result = await get(`/api/user/address/${id}`)
        if (result?.errno === 0) {
          const data = result.data;
          city.value = data.city;
          department.value = data.department;
          houseNumber.value = data.houseNumber;
          name.value = data.name;
          phone.value = data.phone;
        }
      }
    });

    const handleSaveClick = async () => {
      if (
        !city.value ||
        !department.value ||
        !houseNumber.value ||
        !name.value ||
        !phone.value
      ) {
        showToast('All fields are required!')
      } else {
        if (id) {
          const result = await patch(`/api/user/address/${id}`, {
            city: city.value,
            department: department.value,
            houseNumber: houseNumber.value,
            name: name.value,
            phone: phone.value,
          })
          if (result?.errno === 0) {
            router.back();
          }
        } else {
          const result = await post('/api/user/address', {
            city: city.value,
            department: department.value,
            houseNumber: houseNumber.value,
            name: name.value,
            phone: phone.value,
          })
          if (result?.errno === 0) {
            router.back();
          }
        }
      }
    }
    return {
      city,
      department,
      houseNumber,
      name,
      phone,
      show,
      toastMessage,
      isEdit: !!id,
      handleBackClick,
      handleSaveClick,
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.wrapper {
  overflow: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $darkBgColor;
}

.title {
  position: relative;
  @include title;

  .iconfont {
    position: absolute;
    left: .1rem;
    width: .3rem;
    font-size: .24rem;
    color: $search-fontColor;
  }

  &__save {
    position: absolute;
    right: .18rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
}

.content {
  margin-top: .12rem;
  padding: 0 .18rem;
  background: $bgColor;

  &__item {
    display: flex;
    overflow: hidden;
    height: .44rem;
    line-height: .44rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;

    &__label {
      color: $content-fontcolor;
    }

    &__input {
      flex: 1;
      border: none;
      outline: none;
    }
  }
}
</style>
