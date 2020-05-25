const express = require('express')
const router=express.Router()
const tasksController=require('../app/controller/tasksController')
const usersController=require('../app/controller/usersController')
const {authenticateUsers}=require('../app/middlleware/authenticateUser')


router.post('/users/register',usersController.register)

router.post('/users/login',usersController.login)

router.get('/users/accounts',authenticateUsers,usersController.account)

router.delete('/users/logout',authenticateUsers, usersController.logout)

router.get('/tasks',authenticateUsers,tasksController.list)

router.post('/tasks',authenticateUsers,tasksController.create)

router.get('/tasks/:id',authenticateUsers,tasksController.show)

router.put('/tasks/:id',authenticateUsers,tasksController.update)

router.delete('/tasks/:id',authenticateUsers,tasksController.destroy)

module.exports=router