/*
 * require.js settings
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        'vue': [
            'bower_components/vue/dist/vue.min'
        ],
        'vue-validator': [
            'bower_components/vue-validator/dist/vue-validator'
        ],
        'jquery': 'bower_components/jquery/dist/jquery.min'
    }
})


/**
 * entry point
 */

define(['vue', 'vue-validator', 'custom/validation-rules', 'jquery'], function(Vue, validator, rules, $) {
    console.log(rules['rule1'])
    console.log(rules['rule2'])
    console.log($)
    console.log($('#user-form'))
    // var Vue = require('vue')
    // console.log(Vue)
    // var validator = require('vue-validator')
    // console.log(validator)
    Vue.use(validator)

    var form = new Vue({
        el: '#user-form',
        validator: {
            validates: {
                email: function(val) {
                    return rules['testEmail'].pattern.test(val)
                },
                numberInRange: function(val) {
                    return rules['testInRange'].valid(val)
                }
            }
        },
        data: {
            name: '',
            age: 18,
            email: '',
            zip: '111-2222',
            tnum: 400
        },
        methods: {
            myClick: function(e) {
                alert(5555)
                console.log($)
            }
        }
    })//.$mount('#user-form')
})