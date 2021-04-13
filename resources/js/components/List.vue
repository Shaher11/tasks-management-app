<template>
    <div class="list bg-gray-200 rounded-sm p-2 mr-2">
        <div class="flex justify-between">
            <div class="text-gray-700 pl-2 pb-2 font-bold">
                {{ list.title }}
            </div>
        </div>
        <app-card
            v-for="card in list.cards"
            :key="card.id"
            :card="card"
            @deleted="$emit('card-deleted', { ...$event, listId: list.id })"
            @updated="$emit('card-updated', { ...$event, listId: list.id })"
        ></app-card>

        <app-card-add-editor
            v-if="editing"
            @closed="editing = false"
            :list="list"
            @added="$emit('card-added', { ...$event, listId: list.id })"
        ></app-card-add-editor>

        <app-add-card-bottom
            v-else
            @click="editing = true"
        ></app-add-card-bottom>
        
    </div>
</template>

<script>
import Card from "./Card";
import AddCardBottom from "./AddCardBottom";
import CardAddEditor from "./CardAddEditor"
export default {
    components: {
        appCard: Card,
        appAddCardBottom: AddCardBottom,
        appCardAddEditor: CardAddEditor
    },

    props: {
        list: Object
    },
    data() {
        return {
            editing: false
        };
    }
};
</script>

<style scoped>
.list {
    width: 250px;
    min-width: 250px;
}
</style>
