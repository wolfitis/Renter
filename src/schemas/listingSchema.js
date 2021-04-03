import Joi from 'joi'
import { getRandomStr } from '../lib'
import config from '../config'

module.exports = class Listing {
    /**
     * 
     * @param {string} malikMakanId 
     * @param {string} city 
     * @param {string} type - [hostels, flat, appartment, house, banglow]
     * @param {string} address 
     * @param {list} facilities - [bijli, pani, gas, internet][included in rent or price]
     * @param {object} rent - (amount, info(optional))
     * @param {object} details - 
     * @param {string} availability - [vacent, occupied]
     * @param {list} contact - [](name, designation, phone)
     * @param {list} imgs - [](string)
     * @param {ISODate} listedAt - time when the listing was made
     */
    constructor(malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs, listedAt) {
        this.id = getRandomStr(config.ID_Len)
        this.malikMakanId = malikMakanId
        this.city = city
        this.address = address
        this.type = type
        this.facilities = facilities
        this.rent = rent
        this.details = details
        this.contact = contact
        this.imgs = imgs
        // status of listing [APPROVED, PENDING]
        this.availability = availability
        this.time = {}
        this.time.listedAt = listedAt
        this.time.updatedAt = listedAt
        this.status = ''
    }

    /**
     * 
     */
    validator() {
        const schema = Joi.object({
            id: Joi.string()
                .length(config.ID_Len),
            malikMakanId: Joi.string()
                .length(config.ID_Len),
            city: Joi.string()
                .required(),
            address: Joi.string()
                .required(),
            type: Joi.string(),
            facilities: Joi.object({
                electricity: Joi.string()
                    .default(''),
                gas: Joi.string()
                    .default(''),
                water: Joi.string()
                    .default(''),
                internet: Joi.string()
                    .default('')
            }),
            rent: Joi.object({
                amount: Joi.number(),
                info: Joi.string()
            }),
            details: Joi.object({
                detail: Joi.string()
            }),
            contact: Joi.array()
                .items(
                    Joi.object({
                        name: Joi.string(),
                        designation: Joi.string(),
                        phone: Joi.string()
                    })
                ),
            imgs: Joi.array()
                .items(
                    Joi.object({
                        path: Joi.string(),
                        title: Joi.string()
                    })
                ),
            availability: Joi.string(),
            time: Joi.object({
                listedAt: Joi.date(),
                updatedAt: Joi.date()
            }),
            status: Joi.string()
        })
        return schema.validate(this)
    }
}