//Создаём Vue приложение
const app = Vue.createApp({
    // Исходные данные + константы для перевода единиц
    data() {
        return {
            feet: 0,
            meter: 0,
            fToM: 3.28,
            mile: 0,
            kilometer: 0,
            mToK: 1.85,
            degree: 0,
            radian: 0,
            rToD: 57.3,
            celsius: 0,
            fahrenheit: 0,
            fToC: 33.8,
        }
    },
    // Методы перевода из одних ед. в другие
    methods: {
        convertToMeter() {
            this.meter = this.feet / this.fToM;
        },
        convertToFeet() {
            this.feet = this.meter * this.fToM;
        },
        convertToMile() {
            this.mile = this.kilometer / this.mToK;
        },
        convertToKilometer() {
            this.kilometer = this.mile * this.mToK;
        },
        convertToDegree() {
            this.degree = this.radian * this.rToD;
        },
        convertToRadian() {
            this.radian = this.degree / this.rToD;
        },
        convertToCelsius() {
            this.celsius = this.fahrenheit / this.fToC;
        },
        convertToFahrenheit() {
            this.fahrenheit = this.celsius * this.fToC;
        },
    }
})


//Завершаем инициализацию приложения
const vm = app.mount('#app')