"use strict";

var users = [
    {
        fullname : 'Lau Thierry',
        email : 'thierlau@gmail.com',
        arrival : '2013-03-28',
        night : 5,
        total : 550.65
    },
    {
        fullname : 'Letélié Sébastien',
        email : 'sebastien.letelie@gmail.com',
        arrival : '2013-12-23',
        night : 3,
        total : 345.70
    },
    {
        fullname : 'Chatel Thierry',
        email : 'tchatel@gmail.com',
        arrival : '2013-05-14',
        night : 1,
        total : 45.35
    },
    {
        fullname : 'Pierre Martin',
        email : 'pierre.martin@yahoo.com',
        arrival : '2012-04-30',
        night : 3,
        total : 166.95
    },
    {
        fullname : 'Claire Dupont',
        email : 'claire.dupont@gmail.com',
        arrival : '2012-04-12',
        night : 5,
        total : 278.25
    },
    {
        fullname : 'Pauline Wilson',
        email : 'pauline.wilsons@gmail.com',
        arrival : '2014-01-10',
        night : 1,
        total : 55.65
    },
    {
        fullname : 'Pauline Wilson',
        email : 'pauline.wilsons@gmail.com',
        arrival : '2009-02-20',
        night : 5,
        total : 278.25
    }
];

// GET all users
exports.fetchUsers = function (req, res) {
    res.json(200, {users : users});
};


// GET a user
exports.fetchUser = function (req, res){
    var id = req.params.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
            res.json(200, users[i]);
        }
    }

    res.json(404, "Not found");
};

// POST
exports.addUser = function (req, res) {
    var user = req.body;
    users.push(user);
    res.json(201);
};


// PUT
exports.updateUser = function(req, res) {
    var user = req.body;
    var id = user.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1);
            users.push(user);
            res.json(200);
        }
    }

    res.json(304, "Not modified");
};


// PUT
exports.updateUser = function(req, res) {
    var user = req.body;
    var id = user.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1);
            users.push(user);
            res.json(200);
        }
    }

    res.json(304, "Not modified");
};

// DELETE
exports.deleteUser = function (req, res) {
    var id = req.params.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
            users.splice(i, 1);
            res.json(200);
        }
    }

    res.json(304, "Not modified");
};
