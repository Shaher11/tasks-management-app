<template>

    <div class="list bg-gray-200 rounded-sm p-2 mr-2">
        <div class="flex justify-between">
            <div class="text-gray-700 pl-2 pb-2 font-bold">{{list.title}}</div>
        </div>
        <app-card :card="card" v-for="card in list.cards" :key="card.id"></app-card>
  
        <app-add-card-bottom></app-add-card-bottom>

    </div>

</template>

<script>

    import Card from './Card'
    import AddCardBottom from './AddCardBottom'

    export default {
        components: {
            appCard: Card,
            appAddCardBottom: AddCardBottom
        },

        props:{
            list: Object
        }
    }

</script>

<style scoped>

.list{
    width: 250px;
    min-width: 250px;
}

</style>