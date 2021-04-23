const listingRoutes = require('./listingRoute').routes

// export const routes = app => {
//     listingRoutes(app)
// }

export const routes = function (app) {
    listingRoutes(app)

}