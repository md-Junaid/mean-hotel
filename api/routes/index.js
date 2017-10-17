var express = require('express'),
	router	= express.Router(),
	ctrlHotels = require('../controllers/hotels.controllers.js');
	ctrlReviews = require('../controllers/reviews.controllers.js');
	ctrlUsers = require('../controllers/users.controllers.js');

router
	.route('/hotels')
	.get(ctrlHotels.hotelsGetAll)
	.post(ctrlHotels.hotelsAddOne);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.hotelsGetOne)
	.put(ctrlHotels.hotelsUpdateOne)
	.delete(ctrlHotels.hotelsDeleteOne);

//Review routes
router
	.route('/hotels/:hotelId/reviews')
	.get(ctrlReviews.reviewsGetAll)
	.post(ctrlReviews.reviewsAddOne);

router
	.route('/hotels/:hotelId/reviews/:reviewId')
	.get(ctrlReviews.reviewsGetOne)
	.put(ctrlReviews.reviewsUpdateOne)
	.delete(ctrlReviews.reviewsDeleteOne);

//Authentication
router
	.route('/users/register')
	.post(ctrlUsers.register);

router
	.route('/users/login')
	.post(ctrlUsers.login);

module.exports = router;