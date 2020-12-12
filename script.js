// Array within Array from which the buttons populate their answers.
var answers = [
    ["li", "ul", "div", "section"], 
    ["main", "button", "body", "p"],
    ["map", "Every", "splits","gush"],
    ["black bear", "beats", "battlestar galactica", "mose"],
    ["question mark", "hashtag", "exclamation mark", "equal sign"],
    ["in div", "before html", "in script.js", "after bootstrap link"],
    ["html", "css", "java script", "python"],
    ["percent", "dolorsign", "hashtag", "period"],]

//////////////////////////////////////////////////////////////////////////
//Array of correct Answers to match against Eventlistener
var correctAnswers = ["ul", "p", "splits", "black bear", "equal sign", "after bootstrap link", "java script", "hashtag",]
 ////////////////////////////////////////////////////////////////////////   
// Linking buttons and question to html.
    var displayQuestion = document.querySelector("#question")
    var button1 = document.querySelector(".button1")
    var button2 = document.querySelector(".button2")
    var button3 = document.querySelector(".button3")
    var button4 = document.querySelector(".button4")
 ///////////////////////////////////////////////////////////////////////   
//Array of questions.
    var questions = ["What is the proper tag for an unorganized list in html?", "What is the proper tag to use for text?","What is a method that splits an array into a string","Question, what kind of bear is best?","What symbole gives a variable a value?","When using bootstrap, where should you link your css file?","What is a cool language?","What symbole links an ID to a css page? "]
// Index position for questions and answers to iterate through.
    var questionIndex = 0
    var answersIndex = 0
    var correctIndex = 0
    
// Event listener attached to html buttons.
var evenLis = document.querySelector("#buttons")

    

evenLis.addEventListener("click", function(event){
    if (event.target.matches("button")){
        
    displayQuestion.textContent = questions[questionIndex] 
    questionIndex ++
    var arr = answers[answersIndex] 
    answersIndex ++
    button1.textContent = arr[0]
    button2.textContent = arr[1]
    button3.textContent = arr[2]
    button4.textContent = arr[3]
    if (questionIndex === 8)
    stop
////////////////////////////////////////////////////////////////

      
    
/////////////////////////////////////////////////////////////////    


    current = correctAnswers[correctIndex]
    correctIndex ++
    console.log(current)
    if (event.target.textContent !== current){
    console.log("miss");

    }
    }
})



    
    
        
    
    
    


//mayby wrap eventlistener in timer




       

    





// base function for timer
//function timer (){
   //var countDown = setInterval(function(){
    //time.textContent = seconds
    //seconds --
    //if (event.target.textContent !== current)
    //if (seconds <= -1){
     //   clearInterval(countDown)
    //}
    ////}, 1000)
//}






    
