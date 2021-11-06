var readlineSync= require("readline-sync");
const chalk = require('chalk');
var score=0;
var name=readlineSync.question("What's your name?\n");
console.log(chalk.blue("Welcome "+name+"!!😀\n"));
var questionBank =[
  question1={
    options:["Pizza","Pastry","Shawarma","Ice cream"],
    q:"What is my Favorite Food?\n",
    a:"Shawarma"
  },
  question2={
    options:["TV","Eat","Anime","Study🙅"],
    q:"Best way to spend time?\n",
    a:"Anime"
  },
  question3={
    options:["Football","Esports","Basketball","Hockey"],
    q:"Whats my fav sport?\n",
    a:"Esports"
  },
  question4={
    options:["Tokyo","Britain","Space","Iceland"],
    q:"What place would I like to visit?\n",
    a:"Space"
  },
  question5={
    options:["Mountains","Tropical","Beach","Ice cream"],
    q:"Whats my fav chilling place?\n",
    a:"Beach"
  },
  question6={
    options:["Beginner","Intermidiate","Advanced","Enough for survival"],
    q:"Level of expertise is cooking?\n",
    a:"Enough for survival"
  },
   question7={
    options:["Tinder🥵","Youtube","Insta","Snap"],
    q:"Most used app?\n",
    a:"Youtube"
  },
   question8={
    options:["Dog","Cat","Bird","Don't have one"],
    q:"What pet do I have?\n",
    a:"Don't have one"
  },
   question9={
    options:["Sharma","Ajgawkar","Talawadekar","Pandey"],
    q:"What is my last name?\n",
    a:"Shubham"
  },
   question10={
    options:["First","Second","Third","Last"],
    q:"I'm in which year? \n",
    a:"Second"
  }
];
function checkanswer(i,ans){
 if(questionBank[i].options[ans]==questionBank[i].a){
    score++;
    console.log("Right ans!!👀");
  }
  else if(ans==-1&&!(i+1==n)){
    console.log("Next question\n")
  }
  else{
    console.log("Wrong ans😥\n");
  }
  console.log("\nYour score is "+score+".\n")
}
n= readlineSync.question('How many questions would you like to answer 1-10?');
if(n>10){console.log("Input set to 10");n=10}
for(var i=0;i<n;i++){
  ans=readlineSync.keyInSelect(questionBank[i].options,questionBank[i].q);
  checkanswer(i,ans);
}
console.log("No more Questions..\n_____________\n");
console.log(chalk.blue.underline.bold(name+" your score is "+score+"/10 ")+"🎉");
// checkanswer("Where is DBIT\n","Mumbai");
// checkanswer("Best Branch?\n","IT");
// checkanswer("Are you fine?\n","Yes");
// for(var i=1;i<6;i++){
//   var pattern ="";
// for(var j=0;j<i;j++){
//   pattern+="*";
//}console.log(pattern)}