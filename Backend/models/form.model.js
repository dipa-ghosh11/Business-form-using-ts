import mongoose from 'mongoose';

const formSchema=new mongoose.Schema({
    companyname: {
        type: string,
        required: true
    },
    websiteurl:{
        type: string,
        required: true
    },
    firstname:{
        type: string,
        required: true
    },
    lastname:{
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    },
    jobtitle:{
        type: string,
        required: true
    }
}, {timestamps: true})

const Form= mongoose.model('Form', formSchema);

export default Form;
