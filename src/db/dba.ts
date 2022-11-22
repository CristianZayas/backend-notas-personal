import mongoose from 'mongoose';

const mongodb = () => {
    mongoose.connect(`mongodb+srv://cristianzayas:YPtZYR5KXXhEF2Jj@cluster0.hquavtz.mongodb.net/?retryWrites=true&w=majority`)
        .then(result => console.log(`This run dba in mongodb`))
        .catch(error => console.log(`Sorry but not function server connection whit the dba`));
}
export default mongodb