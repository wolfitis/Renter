import { kraydars } from '../db'


// create kraydar
export const create = async (name, gender, age, occupation, contactDetails, identityDocs, dbOptions, dbClient) => {
    try {
        return await kraydars.create(name, gender, age, occupation, contactDetails, identityDocs, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}

// read kraydar
export const readById = async (id, dbOptions, dbClient) => {
    try {
        let filter = {
            id: id
        }
        return await kraydars.readOne(filter, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}
export const readAll = async (filter, dbOptions, dbClient) => {
    try {
        return await kraydars.readAll(filter, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}


// modify kraydar
export const modify = async (filter, dataToModify, dbOptions, dbClient) => {
    try {
        let updateDoc = {
            $set: dataToModify
        }
        return await kraydars.modifyOne(filter, updateDoc, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}

// remove kraydar
export const remove = async (filter, dbOptions, dbClient) => {
    try {
        return await kraydars.remove(filter, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}
