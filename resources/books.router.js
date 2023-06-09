const express = require('express')

const{
    getBooks,
    getOneBook,
    createOneBook,
    deleteOneBook,
    modifyOneBook , 
    getSort,
    getFiltre
} = require("./books.controller")

const authenticate = require('../middleware/authenticate')
const Log = require('../middleware/log')
const verify = require('../middleware/verifyData')

const router = express.Router();

router.route('').get(Log ,getBooks);

router.route('/name').get(Log ,getSort)

router.route('/filtre').get(Log ,getFiltre)

router.route('/:id').get(Log ,getOneBook);

router.route('/').post(Log ,createOneBook);

router.route('/:id').delete(authenticate,Log , verify , deleteOneBook);

router.route('/:id').put(Log , verify , modifyOneBook);



module.exports = router