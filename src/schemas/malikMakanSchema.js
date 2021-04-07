import Joi from 'joi'
import { getRandomStr } from '../lib'
import config from '../config'

module.exports = class MalikMakan {

    /**
     * 
     * @param {string} name - name of malikMakan
     * @param {object} contactDetails - [phone, email, address]
     * @param {object} identityDocs - [photo, NIC, license]
     * @param {string} registeredAt - date of registration
     */
    constructor(name, contactDetails, identityDocs, registeredAt) {
        this.id = getRandomStr(config.ID_Len)
        this.name = name
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
            contactDetails: Joi.object({
                phone: Joi.string()
                    .required(),
                email: Joi.string()
                    .required(),
                address: Joi.string()
                    .required()
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