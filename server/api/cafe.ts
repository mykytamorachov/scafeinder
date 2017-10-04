import { Request, Response } from 'express';
import { Cafe } from '../models/cafe.model';
import data from '../data_for_base';

export const getCafes = (req: Request, res: Response) => {
  Cafe.find({})
    .exec((err, cafes) => {
      if (err) {
        console.log('Error retrieving cafes');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(cafes, null, 2));
      }
    });
};

export const getCafeById = (req: Request, res: Response) => {
  Cafe.find({ _id: {$in: req.params.cafeId.split(',')} })
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send('Not Found!');
      }
    })
    .catch((error) => console.log(error));
};

export const bookInCafe = (req: Request, res: Response) => {
  // res.json(`Booked in ${req.params.cafeId}`);
  const newTables = {
    userId: req.body.userId,
    time: req.body.time,
    people: req.body.people,
    tableType: req.body.tableType,
    tableAmount: req.body.tableAmount
  };
  let isBookedOnThisDay = false;
  const newBooking = [{
    date: req.body.date,
    tables: [{
      userId: req.body.userId,
      time: req.body.time,
      people: +req.body.people,
      tableType: +req.body.tableType,
      tableAmount: +req.body.tableAmount
    }]
  }];
  // console.log(JSON.stringify(req.body, null, 2));
  Cafe.findById(req.body.resId, (err, cafe) => {
    if (err) { return err; }
    if (cafe) {
      // check is booked on this date
      for (let i = 0; i < cafe.bookings.length; i++) {
        if (cafe.bookings[i].date === req.body.date) {
          isBookedOnThisDay = true;
        }
      }
      if (isBookedOnThisDay) {
        // if booked add data to tables field
        const isBookedBooking = [{
          date: req.body.date,
          tables: cafe.bookings.find((item) => item.date === req.body.date)
            .tables.concat(newTables)
        }];
        Cafe.findByIdAndUpdate(req.body.resId, { $set: { bookings: isBookedBooking }}, { new: true }, (error, newCafe) => {
          if (err) {
            return err;
          }
          console.log(newCafe);
        });
      } else {
        // if not concat cafe.bookings with req.bookingss
        const isNotBookedBooking = cafe.bookings.concat(newBooking);
        Cafe.findByIdAndUpdate(req.body.resId, { $set: { bookings: isNotBookedBooking }}, { new: true }, (error, newCafe) => {
          if (err) {
            return err;
          }
          console.log(newCafe);
        });
      }
     // res.json(`Booked in ${cafe.name}`);
    }
  });
  // asd
};
// export const getCafesById = (req: Request, res: Response) => {
//     Cafe.find({ _id: {$in: req.body.favorites} }, (err, cafes) => {
//       if (err) { return err; }
//       if (cafes) {
//         console.log('cafes found', cafes);
//         res.json({ cafes: cafes });
//       }
//     });
//   };

// Add rests to db
// for (const item of data) {
//     const newCafe = new Cafe();
//     newCafe.location = item.location;
//     newCafe.name = item.name;
//     newCafe.rating = item.rating;
//     newCafe.address = item.address;
//     newCafe.categories = item.categories;
//     newCafe.cuisines = item.cuisines;
//     newCafe.features = item.features;
//     newCafe.tables = item.tables;
//     newCafe.img = item.img;
//     newCafe.save((err, insertedCafe) => {
//         if (err) {
//             console.log('Error adding new cafe');
//         } else {
//             console.log(JSON.stringify(insertedCafe, null, 2));
//         }
//     });
// }
