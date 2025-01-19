const express= require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema}= require("../schema.js");
const Review=require("../models/review.js")
const Listing=require("../models/listing.js")
const {validateReview,isLoggedIn,isReviewAuthor}= require("../middleware.js")
const listingController = require("../controllers/review.js")

//merge Params=> preserve the req.params values from the parents router, if the parent and the child have conflicting params names, the child value take precedence..

// post reviews..



router.post("/", isLoggedIn,validateReview,wrapAsync(listingController.createReview));

//delete review route
router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(listingController.destroyReview))


module.exports=router;