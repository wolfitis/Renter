import Admin from '../schemas/adminSchema'
import { find, findOne, insertOne, updateOne, updateMany, deleteOne } from './setup'

const collectionName = 'admins'

export const create = async (name, email, options, client) => {

    let newAdmin = new Admin(name, email)
    let { value, err } = newAdmin.validator()
    if (err) throw new Error(err.details[0].message)
    console.log('--inside admin - create')
    const result = await insertOne(collectionName, value, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const readOne = async (filter, options, client) => {
    const result = await findOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const remove = async (filter, options, client) => {
    const result = await deleteOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}