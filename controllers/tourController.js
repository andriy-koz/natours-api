const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Missing name or price' });
  }
  next();
};

exports.getAllTours = (req, res) => {
  // console.log(req.requestTime);
  // res.status(200).json({
  //   status: 'success',
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

exports.getTour = (req, res) => {
  // const tour = tours.find((el) => el.id === req.params.id * 1);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
