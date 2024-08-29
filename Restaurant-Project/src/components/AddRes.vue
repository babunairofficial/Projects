<template>
    <Header />
    <h1>Hello User, Welcome on Add Restaurant page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"AddRestaurant",

    components:{
        Header
    },
    data(){
        return{
            Restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }

    },
    methods:{
        async addRestaurant(){
            console.warn(this.Restaurant);
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.Restaurant.name,
                address: this.Restaurant.address,
                contact: this.Restaurant.contact
            });
            if(result.status==201){
                this.$router.push({name:'Home'})
            }
        }     
    },

    mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
}
</script>