import mongoose from 'mongoose';

const mongodb = () => {
    mongoose.connect(`${process.env.CONNECTION}`)
        .then(result => console.log(`This run dba in mongodb`))
        .catch(error => console.log(`Sorry but not function server connection whit the dba`));
}
export default mongodb