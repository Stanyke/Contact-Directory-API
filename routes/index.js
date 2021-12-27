const contactRoutes = require('./contactRoutes');
module.exports = (router) => {
    router.use('/api/v1', contactRoutes())

    return router;
}