var name = {
  name: "semo"
};

var location = {
  location: "Provo, Utah"
};

var occupations = ["Visual Effects Compositor",
  "Developer"];

var hobbies = {
  hobbies: [{
    "name": "Watching cartoons",
    "type": "current"
    },
    {
    "name": "Quacking",
    "type": "past"
  }]
};


module.exports = {

  getName: function (req, res, next) {
    res.status(200).json(name);
  },

  putName: function (req, res, next) {

            name.name = req.body.name;  // update the name info

            // save the name
            name.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Name updated!' });
            });
  },

  getLocation: function (req, res, next) {
    res.status(200).json(location);
  },

  getOccupations: function (req, res, next) {
    if (req.query.sort === 'asc') {
      console.log("Sorting Ascending...");
      var occupationsSortedAsc = occupations;
      occupationsSortedAsc.sort();
      res.status(200).json(occupationsSortedAsc);
    }
    else if (req.query.sort === 'desc') {
      console.log("Sorting Descending...");
      var occupationsSortedDesc = occupations;
      occupationsSortedDesc.sort().reverse();
      res.status(200).json(occupationsSortedDesc);
    }
    else {
      console.log("Not sorting...");
      res.status(200).json(occupations);
    }
  },

  createOccupation: function (req, res, next) {
    occupations.push(req.body);
    res.status(200).json(occupations);
  },

  getLatestOccupation: function (req, res, next) {
    res.status(200).json(occupations[occupations.length - 1]);
  },

  getHobbies: function (req, res, next) {
    res.status(200).json(hobbies);
  },

  getHobbiesByType: function (req, res, next) {
    var type = req.query.type;
    if (type) {
      var result = hobbies.filter(function(hobbies){
        return hobbies.type === type;
      });
      res.status(200).json(result);
    }
    else {
      res.status(200).json(hobbies);
    }
  },

};
