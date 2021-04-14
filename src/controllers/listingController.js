import { listings } from '../db'


// create listing
export const create = async (malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, dbOptions, dbClient) => {
    try {
        return await listings.create(malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}

// read listing
export const read = async (filter, dbOptions, dbClient) => {
    try {

        return await listings.readOne(filter, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}

// modify listing
export const modify = async (filter, dataToModify, dbOptions, dbClient) => {
    try {
        return await listings.modifyOne(filter, dataToModify, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}

// remove listing
export const remove = async (filter, dbOptions, dbClient) => {
    try {
        return await listings.remove(filter, dbOptions, dbClient)
    } catch (err) {
        throw err
    }
}
