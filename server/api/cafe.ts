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
  Cafe.findById(req.params.cafeId)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send('Not Found!');
      }
    })
    .catch((error) => console.log(error));
};

export const getCafesById = (req: Request, res: Response) => {
    Cafe.find({ _id: {$in: req.body.favorites} }, (err, cafes) => {
      if (err) { return err; }
      if (cafes) {
        console.log('cafes found', cafes);
        res.json({ cafes: cafes });
      }
    });
  };

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
