import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
	{
		name    : { type: String, required: true },
		rating  : { type: Number, required: true },
		comment : { type: String, required: true },
		user    : {
			type     : mongoose.Schema.Types.ObjectId,
			required : true,
			ref      : 'User'
		}
	},
	{
		timestamps : true
	}
)
const productSchema = mongoose.Schema(
	{
		user         : {
			type     : mongoose.Schema.Types.ObjectId,
			required : true,
			ref      : 'User'
		},

		name         : {
			type     : String,
			required : true
		},
		image        : {
			type     : String,
			required : true
		},
		category     : {
			type     : String,
			required : true
		},
		description  : {
			type     : String,
			required : true
		},
		keywords     : [
			{
				type     : String,
				required : true
			}
		],
		reviews      : [ reviewSchema ],

		rating       : {
			type     : Number,
			required : true,
			default  : 0
		},
		numReviews   : {
			type     : Number,
			required : true,
			default  : 0
		},
		price        : {
			type     : Number,
			required : true,
			default  : 0
		},
		countInStock : {
			type     : Number,
			required : true,
			default  : 0
		},
		sizeInStock  : {
			5  : { type: Number, required: true, default: 0 },
			6  : { type: Number, required: true, default: 0 },
			7  : { type: Number, required: true, default: 0 },
			8  : { type: Number, required: true, default: 0 },
			9  : { type: Number, required: true, default: 0 },
			10 : { type: Number, required: true, default: 0 }
		}
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product
