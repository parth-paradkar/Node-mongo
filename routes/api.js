// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

const Profile = require('../models/Profile');
const Team = require('../models/Team');


//Query to the database

router.get('/profile', (req, res) =>{
	const query = req.query;
	Profile.find(query)
	.then(profile =>{
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/team', (req, res) =>{
	const query = req.query;
	Team.find(query)
	.then(team =>{
		res.json({
			confirmation: 'success',
			data: team
		})
	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/profile/:id', (req, res) => {
	const id = req.params.id;
	Profile.findById(id)
	.then(profile =>{
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: 'Profile ID not found'
		})
	})
})

router.get('/team/:id', (req, res) => {
	const id = req.params.id;
	Team.findById(id)
	.then(team =>{
		res.json({
			confirmation: 'success',
			data: team
		})
	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: 'Team ID not found'
		})
	})
})

router.post('/profile', (req, res) =>{
	Profile.create(req.body)
	.then(profile =>{
		res.json({
			confirmation: 'success',
			data: profile
		})

	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})


router.post('/team', (req, res) =>{
	Team.create(req.body)
	.then(team =>{
		res.json({
			confirmation: 'success',
			data: team
		})

	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})



module.exports = router
