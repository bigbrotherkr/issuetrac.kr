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

    app.route('/:issue')
		.get(issue.show_issue)
		.post(authorization.requiresLogin, hasAuthorization, issue.update)
    app.route('/:issue/:group')
        .get(issue.show_group)
	app.route('/new')
		.put(authorization.requiresLogin, hasAuthorization, issue.create_issue)
	app.route('/:issue/newgroup')
		.get(issue.create_group)
	app.route('/:issue/:group/addart')
		.get(issue.create_art)
	app.route('/:issue/:group/comment')
		.get(issue.update_group)
    // Finish with setting up the articleId param
    app.param('issue', issue.issue);
	app.param('group', issue.groups);

};