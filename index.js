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

define(['vue', 'vue-validator', 'custom/rules', 'jquery'], function(Vue, validator, rules, $) {
    console.log(rules['rule1'])
    console.log(rules['rule2'])
    console.log($)
    console.log($('#user-form'))
        // console.log(f)
        // console.log(h)
        // var Vue = require('vue')
        // console.log(Vue)
        // var validator = require('vue-validator')
        // console.log(validator)
    Vue.use(validator)

    var form = new Vue({
        validator: {
            validates: {
                email: function(val) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
                }
            }
        },
        data: {
            name: '',
            age: 18,
            email: '',
            zip: '11112222'
        },
        methods: {
            myClick: function(e) {
                alert(5555)
                console.log($)
            }
        }
    }).$mount('#user-form')
})