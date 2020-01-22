

const express = require('express');

const db = require('./data/db.config.js');

module.exports = {
    find, 
    add, 
}

function find(){
    return db('accounts')
}

function add(Car){
    return db('car-dealer')
    .insert(Car, 'id')
    .then(([id]) => findBy(id));
}

function findById(id){
    return db('car-dealer')
    .where({ id })
    .first();
}


