const constraints = {
    firstname: {
        presence: {allowEmpty: false, message: "Firstname can't empty."}
    },
    lastname: {
        presence: {allowEmpty: false, message: "Lastname can't empty."}
    },
    nickname:{
        presence: {allowEmpty: false, message: "Nickname can't empty."}
    },
    age: {
        presence: true,
        numericality: {lessThan: 100}
    },
    gender: {
        presence: {allowEmpty: false},
    },
    email: {
        presence: {allowEmpty: false},
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            maximum: 10,
            message: "must be at least 10 digits"
        },
    },
}
const app = {
    data() {
        return {
            img: 'images/profiles.jpg',
            firstname: 'Supphakit',
            lastname: 'Theppong',
            nickname: null,
            age:null,
            gender: null,
            email:null,
            phone:null,
            editpstate: false,
            errors: null
        }
    },
    methods: {
        changeeditstate() {
            this.editpstate = !this.editpstate;
        },
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    nickname: this.nickname},
                                    constraints)
            
        },
        submit(){
            if(!this.errors){
                alert("Registered successfully.");
                this.editpstate = !this.editpstate;
            }else{
                alert("Please correct the following error(s)");
            }
        }
    }

}
mountedApp = Vue.createApp(app).mount('#app');