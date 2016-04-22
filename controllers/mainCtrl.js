var name = {
    name: "semo"
};

var location = {
    location: "Provo, Utah"
};

var occupations = [{
    "occupation": "Visual Effects Compositor"
}, {
    "occupation": "Developer"
}];

var hobbies = {
    hobbies: [{
        "name": "Watching cartoons",
        "type": "current"
    }, {
        "name": "Quacking",
        "type": "past"
    }]
};


module.exports = {

    getName: function(req, res, next) {
        res.status(200).json(name);
    },

    putName: function(req, res, next) {

        var name = req.body.name;
        console.log(name);

        res.json({"name": name});

    },

    getLocation: function(req, res, next) {
        res.status(200).json(location);
    },

    getOccupations: function(req, res, next) {
        if (req.query.sort === 'asc') {
            console.log("Sorting Ascending...");
            var occupationsSortedAsc = occupations;
            occupationsSortedAsc.sort();
            res.status(200).json(occupationsSortedAsc);
        } else if (req.query.sort === 'desc') {
            console.log("Sorting Descending...");
            var occupationsSortedDesc = occupations;
            occupationsSortedDesc.sort().reverse();
            res.status(200).json(occupationsSortedDesc);
        } else {
            console.log("Not sorting...");
            res.status(200).json(occupations);
        }
    },

    createOccupation: function(req, res, next) {
        occupations.push(req.body);
        res.status(201).json(occupations);
    },

    getLatestOccupation: function(req, res, next) {
        res.status(200).json(occupations[occupations.length - 1]);
    },

    getHobbies: function(req, res, next) {
        res.status(200).json(hobbies);
    },

    getHobbiesByType: function(req, res, next) {
        console.log(req.params.type);
        var hobbiesType = [];
        for (var i = 0; i <= hobbies.hobbies.length; i++) {
          if (hobbies.hobbies[i].type === req.params.type) {
            hobbiesType.push(hobbies.hobbies[i]);
            res.status(200).json(hobbiesType);
          }
          else {
            res.sendStatus(400);
          }
        }
    },

};
