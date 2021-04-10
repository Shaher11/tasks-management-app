<template>
    <div class="h-full flex flex-col items-stretch bg-blue-500">
        <div class="header text-white flex justify-between items-center mb-2 bg-blue-600">
            <div class="ml-2 w-1/3">R</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
            <div class="mr-2 w-1/3 flex justify-end">R</div>
        </div>

        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-4 mb-2 text-white font-bold text-lg">
                <span v-if="$apollo.queries.board.loading"> Loading...</span>
                <span v-else>{{ board.title }}</span>
            </div>
            <div class="flex flex-1 items-start overflow-x-auto mx-2" v-if="board">
                <app-list :list="list" v-for="list in board.lists" :key="list.id"></app-list>

            </div>
        </div>
    </div>
</template>
<script>
import List from './components/List'
import BoardQuery from './graphql/BoardWithListsAndCards.gql'

export default {
    components: {
        appList: List,
    },

    apollo:{
        board: {
            query: BoardQuery,

            variables:{
                id: 1
            }
        }
    }

};

</script>


<style scoped>

.header {
    height: 40px;
}


</style>