const movie={
  title:'a',
  movieName:'ohhhh!!!!',
  releaseYear:2020,
  producer:'khalil',
  rating:4.5 
};

showProperties(movie);

function showProperties(obj){
  for (let key in  obj)
  if (typeof obj[key]==='number')
  // if (typeof obj[key]==='string')
  console.log(key,obj[key]);
}