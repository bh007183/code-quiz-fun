// object with questions

   var answers = [["li", "lo", "div", "section"], 
    ["main", "button", "body", "p"],
    ["map", "Every", "splits","gush"],
    ["black bear", "beats", "battlestar galactica", "mose"],
    ["question mark", "hashtag", "exclamation mark", "equal sign"],
    ["in div", "before html", "in script.js", "after bootstrap"],
    ["html", "css", "java script", "python"],
    ["percent", "dolorsign", "hashtag", "period"],]
    

    var displayQuestion = document.querySelector("#question")
    var button1 = document.querySelector(".button1")
    var button2 = document.querySelector(".button2")
    var button3 = document.querySelector(".button3")
    var button4 = document.querySelector(".button4")
    

    var questions = ["What is the proper tag for a unorganized list in html?", "What is the proper tag to use for text?","What is a method that splits an array into a string","Question, what kind of bear is best?","What symbole gives a variable a value?","When using bootstrap, where should you link your css file?","When using bootstrap, where should you link your css file?","What is a cool language?","What symbole links an ID to a css page? "]


    var evenLis = document.querySelector(".listener")
    evenLis.addEventListener("click", function(){
        
        // Changes the question when you change the number
        displayQuestion.textContent = questions[0] 
        var main = questions[0]
        main ++
        questions[0] ++
        //Changes the answers when you change the number
        var arr = answers[0] 
        button1.textContent = arr[0]
        button2.textContent = arr[1]
        button3.textContent = arr[2]
        button4.textContent = arr[3]
    })
    

    

   




//TODO: need to link them somehow. while or if?


//Changes the answers when you change the number
    


    
       

    




var time = document.querySelector(".timer")
var seconds = 60
// base function for timer
function timer (){
   var countDown = setInterval(function(){
    time.textContent = seconds
    seconds --
    if (seconds <= -1){
        clearInterval(countDown)
    }
    }, 100)
}






//console.log(fish)

//

    
