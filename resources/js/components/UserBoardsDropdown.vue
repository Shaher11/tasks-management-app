<template>
    <div>
        <button class="header-btn" @click="showBoards = !showBoards">
            Boards
        </button>
        <app-dropdown-menu :show="showBoards" @closed="showBoards = false">
            <div class="text-gray-600 text-xs font-semibold mb-2 ml-1">
                BOARDS
            </div>

            <router-link
                :to="{ name: 'board', params: { id: board.id } }"
                v-for="board in userBoards"
                :key="board.id"
                @click.native="showBoards = false"
                :class="[`bg-${board.color}-100`]"
                class="rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex mb-1"
            >
                <div
                    :class="[`bg-${board.color}-200`]"
                    class="w-10 rounded-sm rounded-r-none"
                ></div>
                <div class="p-2">{{ board.title }}</div>
            </router-link>
            <div
                @click="showModel = true"
                class="rounded-sm hover:bg-gray-200 p-2 underline cursor-pointer mt-2"
            >
                Create new board...
            </div>
            <app-model
                :width="300"
                :height="250"
                :show="showModel"
                @closed="showModel = false"
            >
                Hello from Model ...
            </app-model>
        </app-dropdown-menu>
    </div>
</template>

<script>
import { mapState } from "vuex";
import UserBoards from "./../graphql/UserBoards.gql";
import DropdownMenu from "./DropdownMenu";
import { colorMap100, colorMap200 } from "./../utils";
import Model from "./Model";

export default {
    components: {
        appDropdownMenu: DropdownMenu,
        appModel: Model
    },
    apollo: {
        userBoards: {
            query: UserBoards,
            variables() {
                return {
                    userId: 1
                };
            },
            skip() {
                return !this.userId;
            }
        }
    },

    data() {
        return {
            showBoards: false,
            showModel: false
        };
    },
    computed: {
        ...mapState({
            userId: state => state.user.id
        }),
        colorMap100: () => colorMap100,
        colorMap200: () => colorMap200
    }
};
</script>
