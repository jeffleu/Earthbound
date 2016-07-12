var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enemiesSchema = new Schema({
  id: Number,
  name: String,
  hp: Number,
  atk: Number,
  def: Number,
  exp: Number,
  money: Number,
  img: String,
  imgHeight: Number,
  imgWidth: Number
});

var heroesSchema = new Schema({
  name: String,
  level: Number,
  hp: Number,
  atk: Number,
  def: Number,
  exp: Number,
  expToGo: Number,
  money: Number
});

var Enemies = mongoose.model('Enemies', enemiesSchema);
var Heroes = mongoose.model('Heroes', heroesSchema);

module.exports = {
  Enemies: Enemies,
  Heroes: Heroes
}