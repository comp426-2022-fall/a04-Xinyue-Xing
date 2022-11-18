#!/usr/bin/env node

import {roll} from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));

app.get("/app", (req,res) => {
    res.status(200).send("200 OK");
})

app.get('/app/roll/', (req, res) => {
    res.status(200).send(roll(6, 2, 1));
})

app.post('/app/roll', (req, res) => {
	const sides = parseInt(req.body.sides)
	const dice = parseInt(req.body.dice)
	const rolls = parseInt(req.body.rolls)
	res.status(200).send(roll(sides, dice, rolls))
});

app.get('/app/roll/:sides/', (req, res) => {
	const sides = parseInt(req.params.sides)
	res.status(200).send(roll(sides, 2, 1))
});

app.get('/app/roll/:sides/:dice', (req, res) => {
	const sides = parseInt(req.params.sides)
	const dice = parseInt(req.params.dice)
	res.status(200).send(roll(sides, dice, 1))
});

app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
	const sides = parseInt(req.params.sides)
	const dice = parseInt(req.params.dice)
	const rolls = parseInt(req.params.rolls)
	res.status(200).send(roll(sides, dice, rolls))
});

app.get("*", (req,res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port)