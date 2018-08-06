<template>
  <div>
      <h1>Contact List</h1>
      <form @submit.prevent>
          <label>Name</label>
          <input v-model="newContact.name" type="text" placeholder="name"> <br>
          <label>Email</label>
          <input v-model="newContact.email" type="text" placeholder="email"> <br>
          <button @click="addContact" type="submit">Add contact</button>
      </form>
      <table>
          <thead>
              <th>Name</th>
              <th>Email</th>
          </thead>
          <tbody>
              <tr v-for="(contact, key) in contacts" :key="key">
                  <td>{{contact.name}}</td>
                  <td>{{contact.email}}</td>
                  <td><button @click="deleteContact(contact)" type="submit">Delete</button></td>
              </tr>
          </tbody>
      </table>  
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data() {
      return {
          contacts: [
              {name: "John", email: "john@gmail.com"},
              {name: "Jack", email: "jack@gmail.com"},
              {name: "Bob", email: "bob@gmail.com"},
              {name: "Bill", email: "bill@gmail.com"}
          ],
          newContact: {
              name: '',
              email: ''
          }
      }
  },
  methods: {
        addContact() {
            this.contacts.push(this.newContact);
        },
        deleteContact(contact) {
            let indexOfContactToDelete = this.contacts.indexOf(contact);
            this.contacts.splice(indexOfContactToDelete, 1);
            //console.log(indexOfContactToDelete);
        }
  },
  props: {
    msg: String
  }
}
</script>

