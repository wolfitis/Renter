const listingRoutes = require('./listingRoute').routes
// import { listingRoutes } from ('./listingRoute').routes

export const routes = app => {
    listingRoutes(app)
}

// export const routes = function (app) {
//     listingRoutes(app)
// }