// Require mongoose module 
const mongoose = require('mongoose'); 

// Set Up the Database connection 
mongoose.connect( 
	'mongodb+srv://sanjam99:sanket8788@cluster0.m6dkq1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/geeksforgeeks', { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
}) 

// Defining customerSchema schema 
const customerSchema = new mongoose.Schema( 
	{ name: String, orderCount: Number } 
) 

// Defining customerSchema model 
const Customer = mongoose.model( 
	'Customer', customerSchema); 

// creating document using create method 
Customer.create({ name: 'Rahul', orderCount: 5 }) 
	.then(result => { 
		console.log(result) 
	})
