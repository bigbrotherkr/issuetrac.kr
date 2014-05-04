'use strict';

// Articles routes use articles controller
var search = require('../controllers/search');

module.exports = function(app) {

    app.route('/search').get(search.search);

};
