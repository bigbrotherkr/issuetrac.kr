'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue'),
	Groups = mongoose.model('Groups'),
    _ = require('lodash');


/**
 * Find issue by id
 */
exports.issue = function(req, res, next, id) {
    Issue.findById(id, function(err, issue) {
        if (err) return next(err);
        if (!issue) return next(new Error('Failed to load issue ' + id));
        req.issue = issue;
        next();
    });
};

/**
 * Find groups by id
 */
exports.groups = function(req, res, next, id) {
	Groups.findById(id, function(err, groups) {
		if (err) return next(err) ;
		if (!groups) return next(new Error('Failed to load groups ' + id);
		req.groups = groups;
		next();
	});
	};
	
/**
 * Create an issue
 */
exports.create_issue = function(req, res) {
    var issue = new Issue(req.body);

    issue.save(function(err) {
        if (err) {
            return res.render('error', {status: 500});
        } else {
            res.jsonp(issue);
        }
    });
};

/**
 * Update an issue
 */
exports.update = function(req, res) {
    var issue = req.issue;

    issue = _.extend(issue, req.body);

    issue.findByIdAndUpdate(req.body.id, req.body, function(err)) {
        if (err) {
            return res.render('error', {status: 500});
        } else {
            res.jsonp(issue);
        }
    });
};



/**
 * Show an issue
 */
exports.show_issue = function(req, res) {
    res.jsonp(req.issue);
};
/**
 * Show a group
 */
exports.show_group = function(req, res) {
    res.jsonp(req.groups);
};

/**
 * create a group
 */
 exports.create_group = function(req, res) {
    var groups = new Groups(req.body);

    groups.save(function(err) {
        if (err) {
            return res.render('error', {status: 500});
        } else {
            res.jsonp(groups);
        }
    });
	};
/**
 * create an article
 */ 
 exports.create_art = function(req, res) {
    var article = new Groups(req.body);

    groups.save(function(err) {
        if (err) {
            return res.render('error', {status: 500});
        } else {
            res.jsonp(groups);
        }
    });
}; 
/**
 * Update a group
 */
 exports.update_group = function(req, res) {
    var issue = req.issue;
	Groups.findByIdAndUpdate(req.body.id, {'$push':{'comment':req.body}},function(err) {
        if (err) {
            return res.render('error', {status: 500});
        } else {
            res.jsonp(issue);
        }
    });
	};
 
 
