const students = require('../../data/students.json')
const studentsController = {
    
    homePage(req, res) {
        res.render('home');
    }
};

module.exports = studentsController;