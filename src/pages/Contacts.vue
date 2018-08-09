<template>
    <div>
       <h1>Contacts</h1>
       <ContactList :contactList="contacts" />
       <br><br><br>
       <ContactDetails :contactDetails="contacts" />
    </div>
</template>

<script>

    import ContactList from '../components/ContactList.vue';
    import ContactDetails from '../components/ContactDetails.vue';
    export default {
        components: {
            ContactList,
            ContactDetails
        },
        data () {
            return {
                contacts: [
                    { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
                    { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
                    { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
                ]
            }
        },
        computed: {
            contact () {
                let routeParam = this.$route.params.id;
                return this.contacts.find(contact => contact.id == routeParam);
            }
        }
        
    }

</script>