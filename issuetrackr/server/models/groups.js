'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupsSchema = new Schema({
	article: [{
		title: { 
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		link: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
	}]
});

mongoose.model('Groups', GroupsSchema);