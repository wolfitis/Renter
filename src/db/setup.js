/**
 * export functions are alphabetically ordered
 */
const MongoClient = require('mongodb').MongoClient

let uri = null
let dbName = null

console.log('Setting Up Database')
dbName = 'runter2'
uri = uri = `mongodb://localhost:27017/${dbName}`
export const getClient = () => {
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

export const getDB = (client) => {
    return client.db(dbName)
}

export const deleteOne = async (collectionName, filter, options, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.deleteOne(filter, options)
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}

export const find = async (collectionName, filter, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.find(filter).toArray().then(items => {
            return items
        })
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}

export const findOne = async (collectionName, filter, options, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.findOne(filter, options)
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}


export const insertOne = async (collectionName, doc, options, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.insertOne(doc, options)
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}


export const updateOne = async (collectionName, filter, update, options, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.updateOne(filter, update, options)
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}

export const updateMany = async (collectionName, filter, update, options, pclient) => {
    let client = null
    try {
        if (!pclient) {
            client = getClient()
            await client.connect()
        } else {
            client = pclient
        }
        const db = getDB(client)
        const collection = db.collection(collectionName)
        return await collection.updateMany(filter, update, options)
    } finally {
        if (!pclient) {
            client.close()
        }
    }
}