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
        addRestaurant(){
            console.warn(this.Restaurant);
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