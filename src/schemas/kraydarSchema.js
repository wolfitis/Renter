import Joi from 'joi'
import { getRandomStr } from '../lib'
import config from '../config'

module.exports = class Kraydar {

    /**
     * 
     * @param {string} name - name of kraydar
     * @param {string} gender - 
     * @param {number} age
     * @param {string} occupation  
     * @param {object} contactDetails - [phone, email, address]
     * @param {object} identityDocs - [photo, NIC, license]
     * @param {string} registeredAt - date of registration
     */
    constructor(name, gender, age, occupation, contactDetails, identityDocs, registeredAt) {
        this.id = getRandomStr(config.ID_Len)
        this.name = name
        this.gender = gender
        this.age = age
        this.occupation = occupation
        this.contactDetails = contactDetails
        this.identityDocs = identityDocs
        this.registeredAt = registeredAt
        // verified malikMakan
        this.verified = false
    }

    /**
     * 
     */
    validator() {
        const schema = Joi.object({
            id: Joi.string()
                .length(config.ID_Len),
            name: Joi.string()
                .required(),
            gender: Joi.string()
                .required(),
            age: Joi.number()
                .required(),
            occupation: Joi.string()
            // .required()
            ,
            contactDetails: Joi.object({
                phone: Joi.string()
                // .required()
                ,
                email: Joi.string()
                    .required(),
                address: Joi.string()
                // .required()
            }),
            identityDocs: Joi.object({
                photo: Joi.string(),
                NIC: Joi.string(),
                license: Joi.string()
            }),
            registeredAt: Joi.date(),
            verified: Joi.boolean()
        })
        return schema.validate(this)
    }
}