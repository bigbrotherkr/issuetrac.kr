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
    //쿼리를 생성합니다. 
    var query = {};

    //정렬순서가 없을 시, 에러를 내놓습니다.
    if (!req.query.sortorder){
        res.render('error', {status: 500});
        return;
    }

    //검색 키워드가 없을 시, 추가창을 만듭니다 - 수정좀 
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

    //카테고리를 받았으면, 쿼리에 내용을 추가합니다.
    if (req.query.category){
        query.category = req.query.category;
    }

    //쿼리를 이용해 DB에서 검색합니다.
    Issue.find(query).sort(req.query.sortorder).exec(function(err, issue) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(issue);
        }
    });
};
