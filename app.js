new Vue({
    el: '#vue-app',
    data: {
        name: "Dallen",
        job: 'Software Engineer',
        website: 'https://www.thenetninja.co.uk/',
        websiteHTML: '<a href="https://www.thenetninja.co.uk/">Link to Net Ninja Site</a>',
        age: 23,
        x: 0,
        y: 0
    },
    methods: {
        logName: function(){
            console.log("You entered your name")
        },
        logAge: function(){
            console.log("You entered your age")
        }
    }
});