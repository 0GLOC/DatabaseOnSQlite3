import dbLite from "../db/options/sqlite.js";

class ContainerMessage {
    getAll = async() => {
        try {
            let objects = await dbLite('ecommerceMessages').select('*');
            //let useObjects = JSON.parse(JSON.stringify(objects));
            return objects;
        } catch (error) {
            console.log(error);
        }
    };
    save = async(object) => {
        try {
            await dbLite('ecommerceMessages').insert(object).then(result => console.log(result));
        } catch (error) {
            console.log(error)
        };
    };
};

export default ContainerMessage;