import Listing from '../schemas/listingSchema'
import { find, findOne, insertOne, updateOne, updateMany, deleteOne } from './setup'

const collectionName = 'listings'

export const create = async (malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, options, client) => {
    var d = new Date()
    var listedAt = d.toISOString().slice(0, 10)
    // sample listedAt - 2021-04-03
    let newListing = new Listing(malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, listedAt)
    let { value, err } = newListing.validator()
    if (err) throw new Error(err.details[0].message)
    console.log('--inside listings - create')
    const result = await insertOne(collectionName, value, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Create')
}

export const modifyOne = async (filter, dataToModify, options, client) => {
    // console.log('--this is data to modify in listinsg--')
    // console.log(dataToModify.id)
    // console.log(dataToModify.malikMakanId)
    // console.log(dataToModify.city)
    // console.log(dataToModify)
    // let newListing = new Listing(dataToModify.malikMakanId, dataToModify.city, dataToModify.address, dataToModify.facilities, dataToModify.rent, dataToModify.details, dataToModify.contact, dataToModify.imgs, dataToModify.availability, dataToModify.time, dataToModify.status)
    // console.log('--this is newListing in listinsg--')
    // console.log(newListing)
    // let { value, err } = newListing.validator()
    // let { value, err } = dataToModify.validator()
    // console.log('---this is value in listings --')
    // console.log(value)
    // console.log('this is error--')
    // console.log(err)
    // if (err) throw new Error(err.details[0].message)
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
    let newListing = new Listing(dataToModify)
    let { value, err } = newListing.validator()
    if (err) throw new Error(err.details[0].message)
    // 
    // same as modifyOne
    // 
    // option for now we are making updateVal = dataToModify
    let updateVal = dataToModify
    const result = await updateMany(collectionName, filter, updateVal, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Modify Records')
}

export const readOne = async (filter, options, client) => {
    console.log('--this is filter in listings--')
    console.log(filter)
    const result = await findOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Read Data')
}

export const readAll = async (filter, client) => {
    const result = await find(collectionName, filter, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Read')
}

export const remove = async (filter, options, client) => {
    const result = await deleteOne(collectionName, filter, options, client)
    if (result) return result
    else throw new Error('DB Error: Could Not Remove')
}