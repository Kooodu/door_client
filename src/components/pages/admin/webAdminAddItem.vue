<template>
    <div class="fabricator">
      <div class="fabricator__container">
          <div class="fabricator__item">
              <div class="fabricator__text">Создание товара</div>
              <input type="text" class="login__input" placeholder="Название..." v-model="add__title">
              <input type="text" class="login__input" placeholder="ID категории..." v-model="add__category">
              <input type="text" class="login__input" placeholder="Цена..." v-model="add__price">
              <input type="text" class="login__input" placeholder="ID производителя..." v-model="add__fabricator">
              <textarea type="text" class="login__input textarea" placeholder="Описание..." v-model="add__description"></textarea>
              <input type="text" v-for="input in inputs" :key="input" class="login__input" v-model="input.link" placeholder="Картинка...">
              <div class="login__button margin__button" v-on:click="add__image__input">Добавить поле для ввода картинки</div>
              <div class="parametrs__cont" v-for="parameter in parameters" :key="parameter">
                <input type="text" class="login__input" v-model="parameter.key" placeholder="Ключ...">
                <input type="text" class="login__input" v-model="parameter.value" placeholder="Значение...">
              </div>
              <div class="login__button margin__button" v-on:click="add__parameter__inputs">Добавить поле для ввода параметра</div>
              <input type="text" class="login__input" placeholder="Артикль..." v-model="add__article">
              <div class="login__button" v-on:click="add__item">Создать</div>
              <router-link to="/admin-item-other-choose" class="login__button margin__other">Другое</router-link>
          </div>
      </div>
      <div class="all__container">
            <div class="all__fabricators">
                <div class="fabricator__text">Все категории</div>
                <div class="fabricator__product" v-for="category in categories" :key="category.id">
                  <div class="fabricator__name">Название:<br/>{{ category.title }}</div>
                  <div class="fabricator__name">ID:<br/>{{ category.id }}</div>
                </div>
            </div>
            <div class="all__fabricators">
                <div class="fabricator__text">Все производители</div>
                <div class="fabricator__product" v-for="fabricator in fabricators" :key="fabricator.id">
                    <div class="fabricator__name">Название:<br/>{{ fabricator.title }}</div>
                    <div class="fabricator__name">ID:<br/>{{ fabricator.id }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webAdminAddItem',
    data() {
        return {
            categories: [],
            fabricators: [],
            // добавление
            add__title: '',
            add__category: '',
            add__price: '',
            add__fabricator: '',
            add__description: '',
            inputs: [
                {
                    link: ''
                }
            ],
            parameters: [
                {
                    key: '',
                    value: ''
                }
            ],
            add__article: ''
            // изменение
            // удаление
        }
    },
    methods: {
        async add__item() {
            await axios.post('/product', {
                title: this.add__title,
                category: Number(this.add__category),
                price: Number(this.add__price),
                fabricator: Number(this.add__fabricator),
                description: this.add__description,
                images: this.inputs,
                parameters: this.parameters,
                article: this.add__article
            })
            location.reload()
        },
        add__image__input() {
            let object = {
                link: ''
            }

            this.inputs.push(object)
        },
        add__parameter__inputs() {
            let object = {
                key: '',
                value: ''
            }

            this.parameters.push(object)
        },
        async get__fabricators() {
            const {data} = await axios.get('/fabricator')
            this.fabricators = data
        },
        async get__categories() {
            const {data} = await axios.get('/category')
            this.categories = data
        },
    },
    mounted() {
        this.get__fabricators(),
        this.get__categories()
    }
}
</script>

<style>
.margin__other {
    margin: 20px 0px 0px 0px;
}
.fabricator {
    margin: 40px 0px 40px 0px;
}
.textarea {
    appearance: none;
    padding: 12px 0px 0px 12px;
    height: 180px;
    resize: none;
}
.margin__button {
    margin: 0px 0px 20px 0px;
}
.parametrs__cont {
    display: flex;
    flex-direction: column;
}
.all__container {
    margin: 0px 0px 0px 100px
}
.all__fabricators {
    display: flex;
    flex-direction: column;
}
.all__fabricators:not(:last-child) {
    margin: 0px 0px 50px 0px;
}
</style>