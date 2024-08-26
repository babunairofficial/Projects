<template>
    <div class="nav">
        <a href="">Home</a>
        <a href="">Add Restaurant</a>
        <a href="">Update Restaurant</a>
        <a href="" v-on:click="logout">Logout</a>
    </div>
</template>

<script>
export default{
    name:'Home',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>
.nav{
    background-color: rgb(46, 46, 46);
    overflow: hidden;
}
.nav a {
    float: left;
    margin-right: 5px;
    padding: 16px 14px;
    color: antiquewhite;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
}
.nav a:hover{
    background: antiquewhite;
    color: rgb(46, 46, 46);
}
</style>