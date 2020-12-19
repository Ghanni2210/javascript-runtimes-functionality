const movies=[
{title:'a',year:2018,rating: 4.5},
{title:'b',year:2018,rating: 3.5},
{title:'c',year:2017,rating: 4},
{title:'d',year:2018,rating: 5},
];


/* all movies in year 2018 rating >4
sort them by thier ratings
decending order
pick their title
sort works for numbers and function for 
objects we need to pass comparision function.*/

const titles=movies
  .filter(m=>m.year===2018 && m.rating>=4)
  // .sort((a,b)=>{
  //   a<b=>-1
  //   a===b=>0
  //   a>b=>1
  // })
  .sort((a,b)=>a.rating-b.rating)
  .reverse()
  .map(m=>m.title)
  console.log(titles);