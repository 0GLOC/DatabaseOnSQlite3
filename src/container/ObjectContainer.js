import db from "../db/options/mysql.js";

class Container {
    getAll = async() => {
        try {
            let objects = await db('ecommerce').select('*');
            let useObjects = JSON.parse(JSON.stringify(objects));
            return objects;
        } catch (error) {
            console.log(error);
        }
    };
    save = async(object) => {
        try {
            let randomCalculator = Date.now();
            let random = Math.round(Math.random()*randomCalculator);
            object.code = random;
            object.timestamp = Date.now();
            await db('ecommerce').insert(object).then(result => console.log(result));
        } catch (error) {
            console.log(error)
        };
    };
    replaceObject = async(object, position) => {
        try {
            await db('ecommerce').select('*').where('id', position).update(object).then(result => console.log(result));
        } catch (error) {
            console.log(error)
        };
    };
    getById = async(object) => {
        try {
            let resultObject = await db('ecommerce').select('*').where('id', object).then(result => {return(result)});
            return resultObject;
        } catch (error) {
            console.log(error)
        };
    };
    deleteById = async(object) => {
        try {
            await db('ecommerce').select('*').where(id, object).del().then(result => console.log('File removed'));
        } catch (error) {
            console.log(error)
        }
    };
};

export default Container;