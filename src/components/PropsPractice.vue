<template>
    <div>
       <h1> {{title}} </h1>
       <router-link to="add-contact">Go to Add contact</router-link><br>
       <button class="btn btn-success">Call</button>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        data() {
            return {

            }
        },
        methods: {
            callParentMethod() {
                this.$emit('parentMtd', 'Aleksandar');
            }
        }
    }
</script>