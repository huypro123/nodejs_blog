const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true, },
    description: { type: String, },
    image: { type: String, },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true, },
    level: { type: String, },
}, {
    timestamps: true
})
//Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}) // phải cho xuống dưới tránh lỗi

module.exports = mongoose.model('Course', Course)