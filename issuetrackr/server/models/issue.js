'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var IssueSchema = new Schema({
	tag:{
		type:[String],
		required: true
		},
	title:{
		type: String,
		required: true
		trim: true
		},
    start:{
		type: Date,
		default: Date.now
		},
    Groups: {
		type:[{
		type:Schema.ObjectId,
		ref:"Groups"}],
			default:[]
		},
	isClosed:{type:Boolean,
		default:false
		},
	lastUpdate: {type:Date,
				default: Date.now
		},
	writer:{type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		},
	commentator:{type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		},
	follower:{type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		},
});

mongoose.model('Issue', IssueSchema);
