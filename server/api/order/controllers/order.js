'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


module.exports={
    async find(ctx) {

        console.log(ctx.request.body);
        const { user } = ctx.state;
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.order.search({ ...ctx.query, user: user.id });
        }
        else {
            entities = await strapi.services.order.find({ ...ctx.query, user: user.id });
        }
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order })
        );
    }
    // async find(ctx) {
    //     const orders = await strapi.services.order.find({
    //         'user.id':ctx.state.user.id,}
    //     );
    //     return orders;
    //     }
    
}