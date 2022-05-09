require('dotenv').config();
const { default: axios } = require('axios');
const { data } = require('cheerio/lib/api/attributes');
const { response } = require('express');
const express = require('express');
const req = require('express/lib/request');
const Laptop = require('./Laptop').Laptop;
const Plugin = require('./Laptop').Plugin;
const ObjectId = require('mongodb').ObjectId;
const url = 
    {
        name: 'thegioididong',
        address: 'https://www.thegioididong.com/'
    }
const app = express();




const laptopController = require('./Controlllers/laptopController')

app.route('/').get((req, res) => {
    res.redirect('/laptop-ldp');
})
app.route('/laptop-ldp').get(laptopController.getAllType, (req, res) => {;
    res.json(req.laptops);
})

app.route('/laptop').get(laptopController.getType,async (req,res) => {
    const laptops = req.laptops;
    const { g } = req.query;
    // laptops.forEach(async product => {
        
    //     axios.get('http://localhost:3000/laptop/' +handleName(product.laptopName) + '?src=osp')
    //         .then(async response => {
    //             let _id;
    //             if(!response.data.laptopName){
    //                 console.log("run");
    //                 return;
    //             }
    //             Laptop.findOne({ laptopName: response.data.laptopName }, async function(err, lap) {
    //                 if(err)console.log(err);
    //                 else if(!lap) {
    //                             laptop = new Laptop({
    //                                 laptopName: response.data.laptopName,
    //                                 thumnail: response.data.thumnail,
    //                                policy: response.data.policy,
    //                                price: response.data.price,
    //                                installment: response.data.installment,
    //                                configuration: response.data.configuration,
    //                                onlinePrice: response.data.onlinePrice,
    //                                gift: response.data.gift,
    //                                laptopDetail: response.data.laptopDetail,
    //                                rate: response.data.rate,
    //                                relateProduct: response.data.relateProduct,
    //                                laptopType: g.replace(/-/g,' '),
    //                                brand: response.data.laptopName.split(' ')[1]|"Không",
    //                            })
    //                             await laptop.save();                               
    //                         _id = laptop._id;
    //                         console.log(laptop);
    //                 }
    //                 else _id = lap._id;
    //                 console.log(response.data.plugin)
    //                 if(response.data.plugin){
    //                 response.data.plugin.forEach(async (plugin) =>{
    //                     Plugin.findOne({ name: plugin.name }, function(err, plug) {
    //                         if(err)console.log(err);
    //                         else if(!plug) {
    //                           const p = new Plugin({
    //                                 name: plugin.name,
    //                                 Image: plugin.Image,
    //                                 onlyOnline: plugin.onlyOnline,
    //                                 onlinePrice: plugin.onlinePrice,
    //                                 stars: plugin.stars,
    //                                 rateNumber: plugin.rateNumber,
    //                               })
    //                               p.laptops.push(_id);
    //                               p.save(function(err) {
    //                                   if(err)console.log(err);
    //                                 //   else addPlugin(_id, p._id);
                                    
    //                               });
    //                                Laptop.findById(_id,async function(err, laptop){
    //                                         if(!laptop.plugin.includes(p._id)){
    //                                             laptop.plugin.push(p._id);
    //                                         }
    //                                     await laptop.save();
    //                               });
    //                             //    Plugin.findById(p._id, function (err, plugin) {
    //                             //      Laptop.findById(_id, function(err, laptop) {
    //                             //             if(!plugin.laptops.includes(laptop._id)){
    //                             //                 plugin.laptops.push(laptop._id);
    //                             //                  plugin.save();
    //                             //             }

    //                             //     })
    //                             // })
    //                         }
    //                         else {
    //                             Laptop.findById(_id,async function(err, laptop){
    //                                 if(!laptop.plugin.includes(plug._id)){
    //                                     laptop.plugin.push(plug._id);
    //                                 }
                                    
    //                             await laptop.save();
    //                             });
    //                        Plugin.findById(plug._id, function (err, plugin) {
    //                          Laptop.findById(_id, function(err, laptop) {
    //                                 if(!plugin.laptops.includes(laptop._id)){
    //                                     plugin.laptops.push(laptop._id);
                                         
    //                                 }
    //                                 plugin.save();

    //                         })
    //                     })
                               
    //                         }
    //                     })
                       
    //                 } )
    //             }
    //             })
                
               
                
    //             Plugin.updateMany({ '_id': laptop.plugin }, { $push: { laptops: laptop._id } });

                
                
    //         }).catch(err => console.log(err));
    // })
    
    // laptops.forEach(laptop => {
        
    // });
    res.json(req.laptops);
})


app.route('/laptop-apple-macbook').get(laptopController.getMacbook, (req, res) => {
    const laptops = req.laptops;
    const { g } = req.query;
    // laptops.forEach(product => {
       
    //     axios.get('http://localhost:3000' + '/laptop/macbook-pro-14-m1-pro-2021-8-core-cpu' + '?src=osp')
    //         .then(response => {
    //             const plugin = response.data.plugin;
    //             plugin.forEach(plu => {
    //                 Plugin.findOneAndUpdate({ name: plu.name }, {$set: {image : plu.image}}, {
    //                     new: true,
    //                   });
    //             })
    //             // let _id;
    //             // Laptop.findOne({ laptopName: response.data.laptopName }, function(err, lap) {
    //             //     if(err)console.log(err);
    //             //     else if(!lap) {
    //             //             if(response.data.laptopName){
    //             //                 laptop = new Laptop({
    //             //                     laptopName: response.data.laptopName,
    //             //                     thumnail: response.data.thumnail,
    //             //                    policy: response.data.policy,
    //             //                    price: response.data.price,
    //             //                    installment: response.data.installment,
    //             //                    configuration: response.data.configuration,
    //             //                    onlinePrice: response.data.onlinePrice,
    //             //                    gift: response.data.gift,
    //             //                    laptopDetail: response.data.laptopDetail,
    //             //                    rate: response.data.rate,
    //             //                    relateProduct: response.data.relateProduct,
    //             //                    laptopType: 'Macbook',
    //             //                    brand: response.data.laptopName.split(' ')[1]|"Không",
    //             //                })
                               
    //             //                 laptop.save();
                               
    //             //             }
    //             //             else { return; }
    //             //             _id = laptop._id;
    //             //     }
    //             //     else _id = lap._id;
    //             //     if(response.data.plugin){
    //             //     response.data.plugin.forEach(async (plugin) =>{
    //             //         Plugin.findOne({ name: plugin.name }, function(err, plug) {
    //             //             if(err)console.log(err);
    //             //             else if(!plug) {
    //             //               const p = new Plugin({
    //             //                     name: plugin.name,
    //             //                     Image: plugin.Image,
    //             //                     onlyOnline: plugin.onlyOnline,
    //             //                     onlinePrice: plugin.onlinePrice,
    //             //                     stars: plugin.stars,
    //             //                     rateNumber: plugin.rateNumber,
    //             //                   })
    //             //                   p.laptops.push(_id);
    //             //                   p.save(function(err) {
    //             //                       if(err)console.log(err);
    //             //                     //   else addPlugin(_id, p._id);
                                    
    //             //                   });
    //             //                    Laptop.findById(_id,async function(err, laptop){
    //             //                             if(!laptop.plugin.includes(p._id)){
    //             //                                 laptop.plugin.push(p._id);
    //             //                             }
    //             //                         await laptop.save();
    //             //                   });
    //             //                 //    Plugin.findById(p._id, function (err, plugin) {
    //             //                 //      Laptop.findById(_id, function(err, laptop) {
    //             //                 //             if(!plugin.laptops.includes(laptop._id)){
    //             //                 //                 plugin.laptops.push(laptop._id);
    //             //                 //                  plugin.save();
    //             //                 //             }

    //             //                 //     })
    //             //                 // })
    //             //             }
    //             //             else {
    //             //                 Laptop.findById(_id,async function(err, laptop){
    //             //                     if(!laptop.plugin.includes(plug._id)){
    //             //                         laptop.plugin.push(plug._id);
    //             //                     }
                                    
    //             //                 await laptop.save();
    //             //                 });
    //             //            Plugin.findById(plug._id, function (err, plugin) {
    //             //              Laptop.findById(_id, function(err, laptop) {
    //             //                     if(!plugin.laptops.includes(laptop._id)){
    //             //                         plugin.laptops.push(laptop._id);
                                         
    //             //                     }
    //             //                     plugin.save();

    //             //             })
    //             //         })
                               
    //             //             }
    //             //         })
                       
    //             //     } )
    //             // }
    //             // })
                
               
                
    //             // Plugin.updateMany({ '_id': laptop.plugin }, { $push: { laptops: laptop._id } });

                
                
    //         }).catch(err => console.log(err));
    // })
    
    // laptops.forEach(laptop => {
        
    // });
    res.json(req.laptops);
})

app.route('/laptop/:laptop').get(laptopController.getLaptopDetail, (req, res) => {

    res.json(req.laptops);
})

const array = ['i3', 'i5', 'i7', 'R5', 'R6', 'R7'];
const regex = /(?:(?:18|19|20|21)[0-9]{2})/g;
function handleName(name) {
    
    var regExp = /\(([^)]+)\)/;
    if(name.includes('MacBook')&&regExp.test(name)){
        const r = name.match(/\b\d{4}\b/);
        return (name.split(r)[0] + r+ " " + name.match(regExp)[1]).replace(/\s/g,'-').toLowerCase().replace('laptop-', '');
    }
    
    for(let i = 0; i< array.length;i++){
         if(name.includes(array[i])){
             if(/\./g.test(name.match(regExp)[1])){
                return (name.split(array[i])[0] + array[i]).replace(/\s/g,'-').toLowerCase().replace('laptop-', '');
             }
             else
              return (name.split(array[i])[0] + array[i]+ " " + name.match(regExp)[1]).replace(/\s/g,'-').toLowerCase().replace('laptop-', '');
             } 
        // else if(regex.test(name)){
        //     return (name.split(name.match(regex)) + array[i]+ " " + name.match(regExp)[1]).replace(/\s/g,'-').toLowerCase().replace('laptop-', '');
        // }
            }

}
// function addLaptop(_idPlug, _idlaptop){
//     console.log(_idPlug, _idlaptop);
//     // Plugin.findByIdAndUpdate(_idPlug, { $push: { laptops: _idLaptop } })
// }
// function addPlugin(_idLaptop, _idPlug){
//     console.log(_idPlug, _idlaptop);
//     // Laptop.findByIdAndUpdate(_idLaptop, { $push: { plugin: _idPlug } })
// }



app.listen(3000, () => {
    console.log('Listening on port ' + 3000);
  });