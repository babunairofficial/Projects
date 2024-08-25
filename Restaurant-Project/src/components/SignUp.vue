<template>
    <img class="logo" src="../assets/logo.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp"> Sign Up</button>
    </div>
    

</template>

<script>
import axios from 'axios';
    export default{
        name:'SignUp',
        data(){
            return{
                name:"",
                email:"",
                password:""
            }
        },
        methods:{
            async signUp(){
                console.warn("signup", this.name, this.email, this.password)
                let result= await axios.post("http://localhost:3000/users",{
                    email: this.email,
                    password: this.password,
                    name: this.name
                });

                console.warn(result);
                if(result.status==201){
                    alert("sign-up done");
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:"Home"})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'Home'})
            }
        }
    }
</script>

<style>
    .logo{
        width: 100px;
        display: block;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
    }

    .register {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .register input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #f0934c;
    }
    
    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid palevioletred;
        background: #f0934c;
        color: white;
        cursor: pointer;
    }

</style>