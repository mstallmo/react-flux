"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../actions/courseActions');
const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');

let _courses = [];

const CourseStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    emitChange(){
        this.emit('change');
    },

    getAllCourses() {
        return _courses;
    },

    getCourseById(id) {
        return _.find(_courses, {id: id});
    }
});

Dispatcher.register(action => {
    switch(action.actionType) {
        case "INITIALIZE":
            _courses = action.initialData.courses;
            CourseStore.emitChange();
            break;
        case "CREATE_COURSE":
            _courses.push(action.course);
            CourseStore.emitChange();
            break;
        case "UPDATE_COURSE":
            const existingCourse = _.find(_courses, {id: action.course.id});
            const existingCourseIndex = _.indexOf(_courses, existingCourse);
            _courses.splice(existingCourseIndex, 1, action.course);
            CourseStore.emitChange();
            break;
        case "DELETE_COURSE":
            _.remove(_courses, function(course) {
                return action.id === course.id;
            });
            CourseStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = CourseStore;