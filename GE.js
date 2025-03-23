var quiz = {

    data: [

    {
    q: "1. What does gender equality mean?",
    o: [
    "A) Boys and girls are treated equally",
    "B) Only boys can do certain things",
    "C) Girls cannot go to school",
    "D) Boys and girls have to wear the same clothes"],
    
    a: 0
    },
    {
    q: "2. Which of these is an example of gender equality?",
    o: [
    "A) A girl playing soccer just like a boy",
    "B) Only boys can play soccer",
    "C) Only girls can dance",
    "D) Boys are not allowed to speak in class"],

    a:0
   },
  
    {
    q: "3. Who can be a leader?",
    o: [
    "A)Only boys can be leaders.",
    "B) Only girls can be leaders.",
    "C) Anyone can be a leader regardless of gender.",
    "D) Leaders must be at least 50 years old."],
    
    a: 2
},
    
    {
    q: "4. Why should we treat everyone equally?",
    o: [
    "A) Because its the law",
    "B) Because everyone is the same",
    "C) Because some people are stronger than others.", 
    "D) Everyone is equal and we are all human" ],

    a:3
    },
    { 
    q: "5. Who decides what activities a person can do, based on their gender ?",
    o: [
    "No one should decide for anyone else based on gender",
    "The government",
    "The person themselves",
    "Society"],
    
    a: 0 }],
    
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
    
    now: 0, // current question
    score: 0, // current score
    
    init: () => {
    quiz.hWrap = document.getElementById("quizWrap");
    
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    
    quiz.draw();
    },
    
    draw: () => {
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.id = "quizo" + i;
    quiz.hAns.appendChild(radio);
    let label = document.createElement("label");
    label.innerHTML = quiz.data[quiz.now].o[i];
    label.setAttribute("for", "quizo" + i);
    label.dataset.idx = i;
    label.addEventListener("click", () => {quiz.select(label);});
    quiz.hAns.appendChild(label);
    }
    },
    
    select: option => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
    label.removeEventListener("click", quiz.select);
    }
    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
    quiz.score++;
    option.classList.add("correct");
    } else {
    option.classList.add("wrong");
    }
    
    quiz.now++;
    setTimeout(() => {
    if (quiz.now < quiz.data.length) {quiz.draw();} else { quiz.hQn.innerHTML=`You have answered ${quiz.score} of ${quiz.data.length} correctly.`; quiz.hAns.innerHTML="" ; } }, 1000); }, reset: ()=> {
        quiz.now = 0;
        quiz.score = 0;
        quiz.draw();
        } };
    
        window.addEventListener("load", quiz.init);