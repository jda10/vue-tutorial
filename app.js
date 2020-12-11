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
        greet: function(time){
            return "Good " + time + " " + this.name;
        },
        add: function(numYears){
            this.age += numYears;
        },
        subtract: function(numYears){
            this.age -= numYears;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("you clicked a target element")
        }
    }
});