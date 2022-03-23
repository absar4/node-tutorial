/**
 * Mongodb CRUD
 * use db_name
 * db.collection_name.insertOne({object object})
 *  example:
 *      db.products.insertOne({name:"iPhone",brand:"iPhone brand",category:"Smart Phones"})
 * collection_name > Add Data(btn) > insert Document
 * example:
 *  {
 * "id": {
 *  ---------------
 * },
 * "name":"iPhone",
 * "brand":"iPhone brand",
 * "category":"Smart Phones"
 * }
 * _______________________________________________________
 * Show Data:
 * to show data in cmd write:
 *  db.collection_name.find()
 *  db.products.find()
 * _______________________________________________________
 * Update Data:
 *  db.collection_name.updateOne({name:"iPhone"},{$set:{brand:"iPhone"}})
 *  db.student.updateOne({name:"Bhannu"},{$set:{name:"Babita"}})
 * _______________________________________________________
 * Delete Data:
 *  db.student.deleteOne({name:"Bhannu"})
 *  db.student.deleteOne({age:17})
 *  _______________________________________________________
 * 
 */
