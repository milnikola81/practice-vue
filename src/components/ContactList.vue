<template>
    <div class="list-group">
        
        <router-link
        v-for="(contact, index) in contactList" :key="index"
        :to="{name: 'contact-details', params: {id: contact.id}}"
        tag="button"
        exact-active-class="active">
        {{contact.name}}
        </router-link>

        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
            <tr v-for="(contact, index) in contactList" :key='index'>
                <td>{{contact.id}}</td>
                <td>{{contact.name}}</td>
                <td>{{contact.email}}</td>
                <td>{{contact.number}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['contactList'],
    data () {
        return {
            
        }
    }
}
</script>
