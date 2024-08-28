<template>
    <router-view />
</template>

<script>
    import SignUp from './components/SignUp.vue';
    export default{
        name:'App',
        components:{
            SignUp
        }
    }
</script>



<style>
body{
    padding: 0;
    margin:0;


}
.logo{
        width: 100px;
        display: block;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
    }

    .register, .login, .add {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .register input, .login input, .add input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #f0934c;
    }
    
    .register button, .login button, .add button{
        width: 320px;
        height: 40px;
        border: 1px solid palevioletred;
        background: #f0934c;
        color: white;
        cursor: pointer;
    }

</style>
