'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue'),
    _ = require('lodash');

/**
 * Find Articles
 */
exports.search = function(req, res) {
    var query = {};

    if (!req.query.sortorder){
        res.render('error', {status: 500});
        return;
    }

    if (!req.query.keyword){
        query = {
            '$or':[{
                    'title': new RegExp(req.query.keyword)
                },
                {
                    'tag': req.query.keyword
                }
            ]
        };
    }

    if (req.query.category){
        query.category = req.query.category;
    }

    Issue.find(query).sort(req.query.sortorder).exec(function(err, issue) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(issue);
        }
    });
};
