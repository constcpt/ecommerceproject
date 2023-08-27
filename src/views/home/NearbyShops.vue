<template>
    <div class="nearby">
        <h3 class="nearby__title">Nearby Shops</h3>
        <ShopInfo 
            v-for="item in nearbyList" 
            :key="item._id" 
            :item="item" 
        />
        <!-- <div class="nearby__shop" v-for="item in nearbyList" :key="item._id">
            <img :src="item.imgUrl" class="nearby__shop__img">
            <div class="nearby__content">
                <div class="nearby__content__title">{{ item.name }}</div>
                <div class="nearby__content__tags">
                    <span class="nearby__content__tag">Sales: {{ item.sales }}</span>
                    <span class="nearby__content__tag">Min. Order: {{ item.expressLimit }}</span>
                    <span class="nearby__content__tag">Delivery Fee: {{ item.expressPrice }}</span>
                </div>
                <p class="nearby__content__highlight">{{ item.slogan }}</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import { ref } from 'vue';
import { get } from '../../utils/request';
import ShopInfo from '../../components/ShopInfo';

const useNearbyListEffect = () => {
    const nearbyList = ref([]);
    const getNearbyList = async () => {
        const result = await get('/api/shop/hot-list')
        if (result?.errno === 0 && result?.data?.length) {
            nearbyList.value = result.data
        }
    }
    return { nearbyList, getNearbyList }
}
export default {
    name: 'NearbyShops',
    components: { ShopInfo },
    setup() {
        // const nearbyList = [{
        //     id: 1,
        //     imgUrl: 'https://i.imgur.com/LMzplaf.png',
        //     title: 'Coles',
        //     tags: ['A', 'B', 'C'],
        //     desc: 'Good things are happening at Coles!'
        // }, {
        //     id: 2,
        //     imgUrl: 'https://i.imgur.com/FPLfdoB.png',
        //     title: 'Woolworths',
        //     tags: ['A', 'B', 'C'],
        //     desc: 'Bring a little good to everyone, everyday.'
        // }, {
        //     id: 3,
        //     imgUrl: 'https://i.imgur.com/FPLfdoB.png',
        //     title: 'Woolworths',
        //     tags: ['A', 'B', 'C'],
        //     desc: 'Bring a little good to everyone, everyday.'
        // }, {
        //     id: 4,
        //     imgUrl: 'https://i.imgur.com/FPLfdoB.png',
        //     title: 'Woolworths',
        //     tags: ['A', 'B', 'C'],
        //     desc: 'Bring a little good to everyone, everyday.'
        // }]
        // return { nearbyList }
        const { nearbyList, getNearbyList } = useNearbyListEffect();
        getNearbyList();
        return { nearbyList };
    }
}
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.nearby {
    &__title {
        margin: .16rem 0 .02rem 0;
        font-size: .18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }

    &__shop {
        display: flex;
        padding-top: .12rem;

        &__img {
            margin-right: .16rem;
            width: .56rem;
            height: .56rem;
        }
    }

    &__content {
        flex: 1;
        padding-bottom: .12rem;
        border-bottom: 1px solid $content-bgColor;

        &__title {
            line-height: .22rem;
            font-size: .16rem;
            color: $content-fontcolor;
        }

        &__tags {
            margin-top: .08rem;
            line-height: .18rem;
            font-size: .13rem;
            color: $content-fontcolor;
        }

        &__tag {
            margin-right: .16rem;
        }

        &__highlight {
            margin: .08rem 0 0 0;
            line-height: .18rem;
            font-size: .13rem;
            color: #E93B3B;
        }
    }

}
</style>
