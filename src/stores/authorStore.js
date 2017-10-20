"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../actions/authorActions');
const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');

let _authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    emitChange(){
        this.emit('change');
    },

    getAllAuthors() {
        return _authors;
    },

    getAuthorById(id) {
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(action => {
    switch(action.actionType) {
        case "INITIALIZE":
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case "CREATE_AUTHOR":
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case "UPDATE_AUTHOR":
            const existingAuthor = _.find(_authors, {id: action.author.id});
            const existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case "DELETE_AUTHOR":
            _.remove(_authors, function(author) {
               return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = AuthorStore;