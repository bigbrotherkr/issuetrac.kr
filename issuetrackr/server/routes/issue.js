'use strict';

var issue = require('../controllers/issue');
var authorization = require('./middlewares/authorization');

// issues authorization helpers
var hasAuthorization = function(req, res, next) {
    if (req.issue.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.route('/issues')
        .get(issue.all)
        .post(authorization.requiresLogin, issue.create);
    app.route('/issues/:issueId')
        .get(issue.show)
        .put(authorization.requiresLogin, hasAuthorization, issue.update)

    // Finish with setting up the articleId param
    app.param('issueId', issue.issue);

};