<template>
    <div>
        <button class="header-btn" @click="showBoards = !showBoards">
            Boards
        </button>
        <app-dropdown-menu :show="showBoards">
            <div class="text-gray-600 text-xs font-semibold mb-2 ml-2">
                BOARDS
            </div>

            <div
                v-for="n in 8"
                :key="n"
                class="m-2 bg-green-100 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex"
            >
                <div
                    class="bg-green-200 w-10 rounded-sm rounded-r-none"
                ></div>
                <div class="p-2">The board name!</div>
            </div>

        </app-dropdown-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserBoards from "./../graphql/UserBoards.gql"
import DropdownMenu from "./DropdownMenu"

    export default {
        components: {
            appDropdownMenu: DropdownMenu
        },
        apollo: {
            UserBoards: {
                query: UserBoards,
                variables(){
                    return {
                        userId: 1
                    }
                },
                skip(){
                    return !this.userId;
                }
            }
        },
            
        data() {
            return {
                showBoards: false
            };
        },
        computed: mapState({
            userId: state => state.user.id
        })



    }
</script>