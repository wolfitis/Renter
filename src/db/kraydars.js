import Kraydar from '../schemas/kraydarSchema'
import { find, findOne, insertOne, updateOne, updateMany, deleteOne } from './setup'

const collectionName = 'kraydars'

export const create = async (name, gender, age, occupation, contactDetails, identityDocs, options, client) => {
    var d = new Date()
    var registeredAt = d.toISOString().slice(0, 10)
    // sample listedAt - 2021-04-03
    let newKraydar = new Kraydar(name, gender, age, occupation, contactDetails, identityDocs, registeredAt)
    let { value, err } = newKraydar.validator()
    if (err) throw new Error(err.details[0].message)
    console.log('--inside kraydar - create')
    const result = await insertOne(collectionName, value, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const modifyOne = async (filter, dataToModify, options, client) => {
    let newKraydar = new Kraydar(dataToModify)
    let { value, err } = newKraydar.validator()
    if (err) throw new Error(err.details[0].message)
    // ###########
    // see how to go about it
    // should we keep any difference between dataToModify and updateVal?
    // if we forward dataToModify how can we add updatedAt here? because
    // we are adding dates here (while creating a new listing)
    // but we might reconsider and add the date in controller if that's better
    // option for now we are making updateVal = dataToModify
    let updateVal = dataToModify
    const result = await updateOne(collectionName, filter, updateVal, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Modify Record')
}

export const modifyMany = async (filter, dataToModify, options, client) => {
    let newKraydar = new Kraydar(dataToModify)
    let { value, err } = newKraydar.validator()
    if (err) throw new Error(err.details[0].message)
    // 
    // same as modifyOne
    // 
    // option for now we are making updateVal = dataToModify
    let updateVal = dataToModify
    const result = await updateOne(collectionName, filter, updateVal, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const readOne = async (filter, options, client) => {
    const result = await findOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const readAll = async (filter, client) => {
    const result = await find(collectionName, filter, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const remove = async (filter, options, client) => {
    const result = await deleteOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}