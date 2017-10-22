"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionTypes = require('../constants/actionTypes');


const AuthorActions = {

    createAuthor(author) {
        const newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor(author) {
        const updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor(id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }

};

module.exports = AuthorActions;