Aquariums.remove({});
aquariumId2 = Aquariums.insert({
  title: 'Monterey Bay',
  url: 'http://www.montereybayaquarium.org/'
});

aquariumId = Aquariums.insert({
  title: 'Google',
  url: 'http://www.google.com/'
});

Fish.remove({});
Fish.insert({
  userName: 'Bob',
  imageUrl: 'http://pngimg.com/upload/fish_PNG1156.png',
  top: 50,
  left: 100,
  aquariumId: aquariumId
});

Fish.insert({
  userName: 'Hannah',
  imageUrl: 'http://www.fancyicons.com/free-icons/150/diving/png/256/fish_256.png',
  top: 50,
  left: 50,
  aquariumId: aquariumId2
});

Fish.insert({
  userName: 'Sally',
  imageUrl: 'http://pngimg.com/upload/fish_PNG1156.png',
  top: 50,
  left: 100,
  aquariumId: aquariumId2 
});