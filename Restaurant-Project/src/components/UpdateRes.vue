<template>
    <Header />
    <h1>Hello User, Welcome on Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="Restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
export default{
    name:"UpdateRestaurant",

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

    mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
}
</script>