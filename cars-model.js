

const express = require('express');

const db = require('./data/db.config.js');

module.exports = {
    find, 
    add, 
}

function find(){
    return db('accounts')
}

function add(input){
    return db('accounts')
    .insert(input, 'id')
    .then(([id]) => findById(id));
}

function findById(id){
    return db('accounts')
    .where({ id })
    .first();
}


