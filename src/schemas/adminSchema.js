import Joi from 'joi'
import { getRandomStr } from '../lib'
import config from '../config'

module.exports = class Admin {

    /**
     * 
     * @param {string} name - name of kraydar
     * @param {string} email -
     */
    constructor(name, email) {
        this.id = getRandomStr(config.ID_Len)
        this.name = name
        this.email = email
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
            email: Joi.string()
                .required()
        })
        return schema.validate(this)
    }
}