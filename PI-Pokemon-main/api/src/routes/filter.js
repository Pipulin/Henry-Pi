const getApiInfo = require('./index')
const Pokemon = require('../models/Pokemon')

const {page, size} = req.query;
const pagiPoke = await getApiInfo(Pokemon.findAndCountAll({
    limit: size,
    offset: page * size
}));
res.send(pagiPoke);

module.exports = pagiPoke;