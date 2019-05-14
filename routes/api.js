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

// Updating profile

router.put('/profile', (req, res) =>{
	const reqBody = req.body; //Should have id and other parameters to update
	const profileId = reqBody.id;
	delete reqBody.id;
	//Updating the record in the database
	Profile.findByIdAndUpdate(profileId, reqBody, {new:true})

	// Response sent to user
	.then(profile => {
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	//Error handling
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: 'Profile ID not found'
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

router.delete('/profile', (req, res) =>{
	const profileId = req.body.id;
	Profile.findByIdAndRemove(profileId)
	.then(()=>{
		res.json({
			confirmation: 'success',
			message: 'Proflie deleted!'
		})
	})
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: 'Profile ID not found!'
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

router.put('/team', (req, res) =>{
	const reqBody = req.body; //Should have id and other parameters to update
	const teamId = reqBody.id;
	delete reqBody.id;
	//Updating the record in the database
	Profile.findByIdAndUpdate(teamId, reqBody, {new:true})

	// Response sent to user
	.then(team => {
		res.json({
			confirmation: 'success',
			data: team
		})
	})
	//Error handling
	.catch(err =>{
		res.json({
			confirmation: 'fail',
			message: 'Team ID not found'
		})
	})
})





module.exports = router
