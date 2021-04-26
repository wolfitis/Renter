// import { json } from 'body-parser'

const listingController = require('../controllers/listingController')

export const createListing = async (req, res) => {
    try {
        // let {
        //     malikMakanId = req.body.malikMakanId,
        //     city = req.body.city,
        //     type = req.body.type,
        //     address = req.body.address,
        //     facilities = req.body.facilities,
        //     rent = req.body.rent,
        //     details = req.body.details,
        //     availability = req.body.availability,
        //     contact = req.body.contact,
        //     imgs = req.body.imgs
        // }
        let malikMakanId = req.body.malikMakanId
        let city = req.body.city
        let type = req.body.type
        let address = req.body.address
        let facilities = req.body.facilities
        let rent = req.body.rent
        let details = req.body.details
        let availability = req.body.availability
        let contact = req.body.contact
        let imgs = req.body.imgs

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

export const readById = async (req, res) => {
    try {
        // let {
        //     param1 = req.body.param1,
        //     filter = { param1 }
        // }
        // let param1 = req.body.param1
        // #### some logic issue, it is returning only one result but we should have read all results or read one by Id
        let paramId = req.params.id

        let result = await listingController.readById(paramId)
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
        // let {
        //     param1 = req.body.param1,
        //     filter = { param1 },
        //     dataToModify = {
        //         field1: req.body.data
        //     }
        // }
        let param1 = req.body.param1
        // let param1 = req.params.id
        let filter = { param1 }
        let dataToModify = {
            field1: req.body.data
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
        // let {
        //     param1 = req.body.param1,
        //     filter = { param1 }
        // }
        let param1 = req.body.param1
        let filter = { param1 }
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


export const routes = (app) => {
    app.route('/listing/create').post(createListing)
    // will only return one result
    app.route('/listing/read/:id').get(readById)

    app.route('/listing/modify').put(modifyListing)
    app.route('/listing/remove/:id').delete(removeListing)
}
