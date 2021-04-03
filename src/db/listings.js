import Listing from '../schemas/listingSchema'
import { find, findOne, insertOne, updateOne, updateMany, deleteOne } from './setup'
import { options } from 'joi'

const collectionName = 'listings'

export const create = async (malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, options, client) => {
    var d = new Date()
    var listedAt = d.toISOString().slice(0, 10)
    // sample listedAt - 2021-04-03
    let newListing = new Listing(malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, listedAt)
    let { value, err } = newListing.validator()
    if (err) throw new Error(err.details[0].message)
    console.log('--inside listing - create')
    const result = await insertOne(collectionName, value, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}