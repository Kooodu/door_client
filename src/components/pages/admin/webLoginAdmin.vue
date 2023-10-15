<template>
    <div class="login__container">
        <div class="login">
            <div class="login__text">Введите пароль админа</div>
            <input type="password" class="login__input" placeholder="Пароль..." v-model="password">
            <div class="login__button" v-on:click="sendPassword">Войти</div>
            <div v-if="error" class="login__error">Пароль неверный!</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webLoginAdmin',
    data() {
        return {
            password: '',
            error: false
        }
    },
    methods: {
        async sendPassword() {
            const header = axios

            header.defaults.headers.common['Authorization'] = `${this.password}`;

            const {data} = await axios.post('/app').catch((err) => {
                this.error = true
            })
            if (data) {
                document.cookie = `password=${this.password}`
                this.$router.push('/admin')
            }
            this.password = ''
            this.error = false
        }
    }
}
</script>

<style>
.login__container {
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.login__text {
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 700;
    color: black;
    margin: 0px 0px 20px 0px;
}
.login__input {
    appearance: none;
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: none;
    width: 300px;
    height: 40px;
    padding: 0px 0px 0px 12px;
    margin: 0px 0px 20px 0px;
}
.login__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    background-color: rgba(17,85,204);
    color: white;
}
.login__error {
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    color: black;
    margin: 20px 0px 0px 0px;
}
</style>