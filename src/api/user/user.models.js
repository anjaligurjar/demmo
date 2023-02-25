mongoose=require ('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    id:{
        type:String
    },
    password:{
        type:String
    },newpassword:{
        type:String
    },
    Token:{
        type:String,
        default:" "
    }

})