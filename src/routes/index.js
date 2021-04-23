const listingRoutes = require('./listingRoute').routes

export const routes = app => {
    listingRoutes(app)
}