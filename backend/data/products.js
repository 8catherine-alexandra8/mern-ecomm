const products = [
	{
		name         : 'Tri Color Strappy Heels',
		image        : '/images/blackOrangeTealOpenToeHighHeels.jpg',
		description  :
			'Fun, chunky, and strappy, with heels thick enough to offer support but tapered for a little spice.',
		keywords     : [
			'open toe',
			'summer',
			'spring',
			'heels',
			'high heels',
			'ankle strap',
			'anklestrap',
			'strappy',
			'cage',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'High Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Scrunched Bootie Thong',
		image        : '/images/blackScrunchBootieThong.jpg',
		description  :
			'Perfect for those early summer and early fall Colorado snowstorms.  If you know you should wear boots but you stubbornly want to wear flip flops like you did yesterday, when it was 80 degrees out, these bootie sandals are are for you!',
		keywords     : [
			'sandal',
			'sandals',
			'thong',
			'summer',
			'spring',
			'flat',
			'bootie',
			'boho',
			'bohemian',
			'gladiator',
			'casual'
		],
		category     : 'Sandals',
		price        : 49.99,
		countInStock : 10,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 0,
			6  : 3,
			7  : 0,
			8  : 4,
			9  : 3,
			10 : 1
		}
	},
	{
		name         : 'Cutout Ankle Wrap Sandal',
		image        : '/images/brownBlackCutOutSandal.jpg',
		description  :
			'Structured back-zip sandals. Sleek and modern, cut-out design, to highlight the shape of your foot.',
		keywords     : [
			'sandal',
			'sandals',
			'open toe',
			'ankle zip',
			'ankle wrap',
			'cut out',
			'summer',
			'spring',
			'flat',
			'edgy',
			'minimal',
			'casual'
		],
		category     : 'Sandals',
		price        : 49.99,
		countInStock : 17,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 3,
			6  : 4,
			7  : 4,
			8  : 2,
			9  : 2,
			10 : 2
		}
	},
	{
		name         : 'Leathercraft Toe-Loop Sandals',
		image        : '/images/citronToeLoopAnklet.jpg',
		description  :
			'Barely-there summer sandals, for when you would rather be barefoot.',
		keywords     : [
			'sandal',
			'sandals',
			'toeloop',
			'toe loop',
			'summer',
			'spring',
			'flat',
			'ankle strap',
			'anklestrap',
			'strappy',
			'minimal',
			'casual'
		],
		category     : 'Sandals',
		price        : 39.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Thong Sandle With Ankle Strap',
		image        : '/images/bronzeRedThongAnkleStrapSandalSideView.jpg',
		description  : 'A minimilast take on the gladiator sandal.',
		keywords     : [
			'sandal',
			'sandals',
			'thong',
			'summer',
			'spring',
			'flat',
			'ankle strap',
			'anklestrap',
			'strappy',
			'minimal',
			'casual',
			'gladiator'
		],
		category     : 'Sandals',
		price        : 39.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Mini Wedge Heels',
		image        : '/images/roseOrangeGreyWovenWedgeSandal.jpg',
		description  : 'Cute and colorful, for night out or just casual fun',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'low heels',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Scrunched Thong Bootie',
		image        : '/images/brownSuedeAnkleBootThongSandal.jpg',
		description  :
			'Perfect for those early summer and early fall Colorado snowstorms.  If you know you should wear boots but you stubbornly want to wear flip flops like you did yesterday, when it was 80 degrees out, these bootie sandals are are for you!',
		keywords     : [
			'sandal',
			'sandals',
			'thong',
			'summer',
			'spring',
			'flat',
			'bootie',
			'boho',
			'bohemian',
			'gladiator',
			'casual'
		],
		category     : 'Sandals',
		price        : 49.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 10,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Tri Color Wedge Heels',
		image        :
			'/images/magentaPurpleNeonYellowClosedToeWedgeHighHeel.jpg',
		description  :
			'Flirty and stylish yet supportive, for those who think they cannot wear heels.',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'high heels',
			'ankle strap',
			'anklestrap',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'High Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Tri Color Wedge Heels',
		image        : '/images/blueTealGrayClosedToeWedgeHighHeel.jpg',
		description  :
			'Flirty and stylish yet supportive, for those who think they cannot wear heels.',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'high heels',
			'ankle strap',
			'anklestrap',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'High Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Mini Wedge Heels',
		image        : '/images/blackNeonYellowClosedToeKittenHeel.jpg',
		description  : 'Cute and colorful, for night out or just casual fun',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'low heels',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Mini Wedge Heels',
		image        : '/images/coralClosedToeWedgeSandal.jpg',
		description  : 'Cute and colorful, for night out or just casual fun',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'low heels',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Tri Color Wedge Heels',
		image        : '/images/magentaPurpleBlueClosedToeWedgeHighHeel.jpg',
		description  :
			'Flirty and stylish yet supportive, for those who think they cannot wear heels.',
		keywords     : [
			'closed toe',
			'fall',
			'spring',
			'heels',
			'high heels',
			'ankle strap',
			'anklestrap',
			'strappy',
			'wedge',
			'occasion',
			'dressy',
			'cocktail',
			'party',
			'dress'
		],
		category     : 'High Heels',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Minimalist Tricolor Sandals',
		image        : '/images/triColorMinimalStrapSandalSideView.jpg',
		description  :
			'Barely-there summer sandals, for when you would rather be barefoot.',
		keywords     : [
			'sandal',
			'sandals',
			'toeloop',
			'toe loop',
			'summer',
			'spring',
			'flat',
			'ankle strap',
			'anklestrap',
			'strappy',
			'minimal',
			'casual'
		],
		category     : 'Sandals',
		price        : 39.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Ballet Flats with Ankle Strap',
		image        : '/images/neonYellowGrayBalletFlatAnkleStrap.jpg',
		description  :
			'Strappy ballet flats perfect for when you would rather not sacrifice style for comfort.',
		keywords     : [
			'summer',
			'spring',
			'fall',
			'flat',
			'ankle strap',
			'anklestrap',
			'strappy',
			'minimal',
			'casual',
			'comfortable',
			'edgy'
		],
		category     : 'Flats',
		price        : 59.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Cutout Ankle Wrap Sandal',
		image        : '/images/neonPinkBlackCutOutSandal.jpg',
		description  :
			'Structured back-zip sandals. Sleek and modern, cut-out design, to highlight the shape of your foot.',
		keywords     : [
			'sandal',
			'sandals',
			'open toe',
			'ankle zip',
			'ankle wrap',
			'cut out',
			'summer',
			'spring',
			'flat',
			'edgy',
			'minimal',
			'casual'
		],
		category     : 'Sandals',
		price        : 49.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	},
	{
		name         : 'Thong Sandle With Ankle Strap',
		image        : '/images/blackGladiatorSandal.jpg',
		description  : 'An authentic take on the gladiator sandal.',
		keywords     : [
			'sandal',
			'sandals',
			'thong',
			'summer',
			'spring',
			'flat',
			'ankle strap',
			'anklestrap',
			'strappy',
			'minimal',
			'casual',
			'gladiator'
		],
		category     : 'Sandals',
		price        : 39.99,
		countInStock : 19,
		rating       : 0,
		numReviews   : 0,
		sizeInStock  : {
			5  : 2,
			6  : 3,
			7  : 4,
			8  : 4,
			9  : 3,
			10 : 3
		}
	}
]

export default products
