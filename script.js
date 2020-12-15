////////////////////////Function that starts app/////////////////////////////

function removeChildren(selector, child){
    document.body.querySelector(selector).removeChild(child)
    }
    
        
        
 main()  
   
function main(){    
// Array within Array from which the buttons populate their answers.
var answers = [
    ["li", "ul", "div", "section"], 
    ["main", "button", "body", "p"],
    ["map", "Every", "splits","gush"],
    ["black bear", "beats", "battlestar galactica", "mose"],
    ["question mark", "hashtag", "exclamation mark", "equal sign"],
    ["in div", "before html", "in script.js", "after bootstrap link"],
    ["html", "css", "java script", "python"],
    ["percent", "dolorsign", "hashtag", "period"],[1,1,1,1]]
    
//////////////////////////////////////////////////////////////////////////
//Array of correct Answers to match against answer button Eventlistener.textcontent.
var correctAnswers = ["ul", "p", "splits", "black bear", "equal sign", "after bootstrap link", "java script", "hashtag",]
 ////////////////////////////////////////////////////////////////////////   
// Linking buttons and question to html.
    var displayQuestion = document.querySelector(".question")
    var button0 = document.querySelector(".button0")
    var button1 = document.querySelector(".button1")
    var button2 = document.querySelector(".button2")
    var button3 = document.querySelector(".button3")
 ///////////////////////////////////////////////////////////////////////   
//Array of questions to be answered.
    var questions = ["What is the proper tag for an unorganized list in html?", "What is the proper tag to use for text?","What is a method that splits an array into a string","Question, what kind of bear is best?","What symbole gives a variable a value?","When using bootstrap, where should you link your css file?","What is a cool language?","What symbole links an ID to a css page? "]
// Index position for questions and answers to start from.
    var questionIndex = 0
    var answersIndex = 0
    

    

//// Event listener attached to start button. Starts clock and displays question w/ answeres for first round.
var startLis = document.querySelector(".start")
startLis.addEventListener("click", function(){
    ////Hides start button once clicked////
    startLis.setAttribute("style", "display: none")
    ///Displayes first question and answer to start round///
    displayQuestion.textContent = questions[questionIndex]  
    button0.textContent = answers[answersIndex][0]
    button1.textContent = answers[answersIndex][1]
    button2.textContent = answers[answersIndex][2]
    button3.textContent = answers[answersIndex][3]
    
    ///Displayes setInterval and controls///
    var time = document.querySelector(".time")
    var seconds = 90
    var countDown = setInterval(function(){
    time.textContent = seconds
    seconds --
    if (seconds <= 0){
       clearInterval(countDown)}
    }, 1000)
    
    answersIndex = 1
    ///EVENT LISTENER AND EVENT LISTENER TARGET.
    var evenLis = document.querySelector("#buttons")
    evenLis.addEventListener("click", function(event){
        
        
        
    if (event.target.matches("button")){
         
        questionIndex ++; 
        var arr = answers[answersIndex]
        answersIndex ++;
        displayQuestion.textContent = questions[questionIndex]  
        if (correctAnswers.indexOf(event.target.textContent) === -1){
            console.log("miss"); seconds = seconds - 10;
        }
              
        button0.textContent = arr[0]
        button1.textContent = arr[1]
        button2.textContent = arr[2]
        button3.textContent = arr[3]
        

          
    
    

    /////IF COMPLETED SCORE WITH SUBMIT BAR//////////////////////////
    if (questionIndex >= 8 || seconds <= 0){
        clearInterval(countDown);
        var score = document.createElement("p");
        score.textContent = "Game Over! Your Score: " + seconds;
        document.body.querySelector("#here").appendChild(score)
        var initials = document.createElement("input")
        initials.setAttribute("type", "text")
        initials.setAttribute("placeHolder", "Enter Initials")
        document.body.querySelector("#here").appendChild(initials)
        var submitB = document.createElement("button")
        submitB.textContent="Submit"
        submitB.setAttribute("style", "width : 20%")
        document.body.querySelector("#here").appendChild(submitB)
        ////////
        evenLis.setAttribute("style", "display: none")
        time.setAttribute("style", "display: none")
    
//////////SCORE AND INITIALS SUBMITION TO LOCAL STORAGE//////////////
        
        submitB.addEventListener("click", function(){
            localStorage.setItem("Seconds", seconds.toString())
            localStorage.setItem("Initials", initials.value)
            initials.value = ""
          
            removeChildren("#here", score)
            removeChildren("#here", initials)
            removeChildren("#here", submitB)
            
            var highScore = document.createElement("h2")
            highScore.textContent = "High Scores:"
            document.body.querySelector("#here").appendChild(highScore)
            
            var number = localStorage.getItem("Seconds")
            var person = localStorage.getItem("Initials")
            
            
            var scoreList = document.createElement("li")
            scoreList.textContent = person +"_______" +number
            document.body.querySelector("#here").appendChild(scoreList)
            ///////////////
            var resetB = document.createElement("button")
            resetB.textContent = "Reset"
            resetB.setAttribute("style", "margin-left: 12%")
            document.body.querySelector("#reset").appendChild(resetB)
    
            resetB.addEventListener("click", function(){
                document.location.reload()
            })
                
        })
    
    }
    
    }
})

})
}    

       












    
