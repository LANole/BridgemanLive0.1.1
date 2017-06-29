var mongoose = require('mongoose');
var BlogSchema = new mongoose.Schema({
	category: {type: String, required: true, minlength: 3, enum:['Security', 'Business', 'SEO', 'AWS', 'Tech in Sports', 'Tech Review']},
	title: {type: String, required: true, minlength: 3},
	snippet: {type: String, required: true, minlength: 3},
    content: {type: String, required: true, minlength: 3},
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}    
}, {timestamps: true});
mongoose.model('Blog', BlogSchema);