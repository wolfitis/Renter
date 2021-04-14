import { json } from 'body-parser'

const listingController = require('../controllers/listingController')

export const createListing = async (req, res) => {
    try {
        let {
            malikMakanId = req.body.malikMakanId,
            city = req.body.city,
            type = req.body.type,
            address = req.body.address,
            facilities = req.body.facilities,
            rent = req.body.rent,
            details = req.body.details,
            availability = req.body.availability,
            contact = req.body.contact,
            imgs = req.body.imgs
        }

        let result = await listingController.create(malikMakanId, city, type, address, facilities, rent, details, availability, contact, imgs)
        return res.json({
            result
        })
    } catch (err) {
        return res.json({
            err
        })
    }
}

export const readListing = async (req, res) => {
    try {
        let {
            param1 = req.body.param1,
            filter = { param1 }
        }

        let result = await listingController.read(filter)
        return res.json({
            result
        })
    } catch (err) {
        return res.json({
            err
        })
    }
}

export const modifyListing = async (req, res) => {
    try {
        let {
            param1 = req.body.param1,
            filter = { param1 },
            dataToModify = {
                field1: req.body.data
            }
        }

        let result = await listingController.modify(filter, dataToModify)
        return res.json({
            result
        })
    } catch (err) {
        return res.json({
            err
        })
    }
}

export const removeListing = async (req, res) => {
    try {
        let {
            param1 = req.body.param1,
            filter = { param1 }
        }

        let result = await listingController.remove(filter)
        return res.json({
            result
        })
    } catch (err) {
        return res.json({
            err
        })
    }
}