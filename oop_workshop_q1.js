// Question 1
// creating the album function
// with a place to add the photos
function Album(){
  this.photos=[];
}
// photo function with attributes
function Photo(filepath,location){
  this.filepath = filepath;
  this.location = location;
}
//list of photos with names and locations
//as strings
var mountain = new Photo("mountain.jpg","Arizona");
var lake = new Photo("lake.jpg","California");
var beach = new Photo("beach.jpg","Florida");
//the prototype to add the pics to the album
Album.prototype.insertPic = function(photo) {
  this.photos.push(photo)
}
//inserting one pic into album
var album = new Album()
album.insertPic(mountain)
// console.log(album);

// for loop to add pics to album
function insertPic(Photo) {
  var Photo = 0;
  for (var i = 0; i < Photo.length; i++) {
    if (selectObject.selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}
// console.log(Photo)
