<template>
    <Header />
    <h1>Hello User, Welcome on Add Restaurant page</h1>
</template>

<script>
import Header from './Header.vue';
export default{
    name:"AddRestaurant",

    components:{
        Header
    },

    mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
}
</script>