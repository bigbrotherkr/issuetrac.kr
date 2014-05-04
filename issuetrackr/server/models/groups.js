'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupsSchema = new Schema({
	//기사 
	article: [{
		// 기사 제목 
		title: { 
			type: String,
			required: true,
		},
		// 기사 이미지 
		img: {
			type: String,
		},
		// 기사 링크 
		link: {
			type: String,
			required: true,
		},
		//기사 작성 일자 
		date: {
			type: String,
			required: true,
		},
		//기사 올린 이 
		user: {
        type: Schema.ObjectId,
        ref: 'User'
    	}
	}]
});

mongoose.model('Groups', GroupsSchema);