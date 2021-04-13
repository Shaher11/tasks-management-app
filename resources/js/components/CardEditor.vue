<template>
    <div>
        <textarea
            class="shadow-card rounded-md py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
            placeholder="Enter a title for this card..."
            :value="value"
            ref="card"
            @keyup.esc="closed"
            @keyup.enter="saved"
            @input="$emit('input', $event.target.value)">
        </textarea>

        <div class="flex">
            <button @click="saved" class="rounded-sm py-1 px-3 bg-green-500 text-white cursor-pointer hover:bg-green-400 outline-none">
                {{ label }}
            </button>
            <button @click="closed" class="py-1 px-3 ml-1 rounded-md hover:bg-gray-400 cursor-pointer text-gray-500">
                Cancel
            </button>

        </div>

    </div>
</template>
<script>

export default {
    props:["value", "label"],

    mounted(){
        this.$refs.card.focus();
    },
  
    methods: {
       closed(){
           this.$emit("closed");
       },
       saved(){
           this.$emit("saved");
       }
   }
}
</script>
