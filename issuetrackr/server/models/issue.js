'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Issue Schema
 */
var IssueSchema = new Schema({
	//태그
	tag:{
		type:[String],
		required: true
		},
	//이슈 제목 
	title:{
		type: String,
		required: true
		trim: true
		},
	//이슈가 시작된 날짜
    start:{
		type: Date,
		default: Date.now
		},
	//이슈에 포함된 그룹 
    Groups: {
		type:[{
		type:Schema.ObjectId,
		ref:"Groups"}],
			default:[]
		},
	//닫힌 이슈인지 
	isClosed:{
		type:Boolean,
		default:false
		},
	//마지막으로 업데이트된 날짜 
	lastUpdate: {
		type:Date,
		default: Date.now
		},
	//작성한 사람 
	writer:{
		type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		},
	//댓글 단 사람 
	commentator:{
		type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		},
	//팔로우하는 사람
	follower:{
		type:[{
		type:Schema.ObjectId,
		ref:"User"}],
			default:[]
		}
});

mongoose.model('Issue', IssueSchema);
