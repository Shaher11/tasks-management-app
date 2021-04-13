<template>
    <div >
        <div v-if="!editing"
            class="group flex justify-between shadow-card bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2">
            
            <div>{{card.title}}</div>
            <div class="flex font-bold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-500">
                <div class="text-gray-400 pr-2 hover:text-yellow-500" @click="editing = true">E</div>
                <div class="text-gray-400 hover:text-red-500" @click="cardDelete">D</div>
            </div>
        </div>

        <app-card-editor v-else v-model="title" class="mb-2" label="Save Card" @closed="editing=false" @saved="cardUpdated"></app-card-editor>
    </div>
</template>

<script>
import CardDelete from "./../graphql/CardDelete.gql";
import CardUpate from "./../graphql/CardUpdate.gql"
import { EVENT_CARD_DELETED, EVENT_CARD_UPDATED } from "./../constants";
import CardEditor from "./CardEditor"

export default {
         components: {
            appCardEditor: CardEditor
        },

        props:{
            card: Object
        },

        data(){
            return{
                editing:false,
                title: this.card.title    
            }
        },

        methods: {
            cardDelete () {
                const self = this;

                this.$apollo.mutate({
                    mutation: CardDelete,
                    variables: {
                        id: this.card.id
                    },
                    update(store, {data: { cardDelete } }) {
                        self.$emit("deleted", { 
                            store, 
                            data: cardDelete, 
                            type:EVENT_CARD_DELETED 
                        });
                    }
                })
            },
            cardUpdated(){
                const self = this;

                this.$apollo.mutate({
                    mutation: CardUpate,
                    variables: {
                        id: this.card.id,
                        title: this.title
                    },
                    update(store, {data: cardUpdated }){
                        self.$emit("updated",{
                            store,
                            data:cardUpdated,
                            type: EVENT_CARD_UPDATED
                        });
                        self.editing = false;
                    }
                })

            }
        }
    }

</script>

