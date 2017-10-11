"use strict";

const authors = require('./authorData').authors;
const _ = require('lodash');

const _generateId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

const _clone = function (item) {
    return JSON.parse(JSON.stringify(item));
};

const AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id){
        const author = _.find(authors, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        console.log('Pretend this just saved the author via ajax call...');

        if (author.id) {
            const exitingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            author.id = _generateId(author);
            authors.push(_clone(author));
        }

        return author;
    },

    deleteAuthor: function(id) {
        console.log('Pretend this just deleted the author from the DB via AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;