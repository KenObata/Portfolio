'use strict';

{
    const words=[
        'apple',
        'sky',
        'blue',
        'hawaii',
        'middle',
        'mississippi'
        
    ];
    let word = words[Math.floor(Math.random()*words.length)];
    
    
    /*index of a letter*/
    let location =0;
    let score=0;
    let miss =0;
    const timeLimit = 30*1000;
    let startTime; //to declare
    let isPlaying = false;
    
    const target=document.getElementById('target');
    const scoreLabel = document.getElementById('score'); /*scoreLabel has content*/
    const missLabel = document.getElementById('miss');
    const timeLabel = document.getElementById('timer');
    
    //function updateTarget called if words are the same
    function updateTarget(){
        let placeholder = ''; //declare
        for (let i =0; i < location; i++){
            placeholder +='_';
        }
        //update target word. letters after location index remains same
        target.textContent = placeholder + word.substring(location);
    }
    
    // function updateTimer called from 'click'
    function updateTimer() {
        const timeLeft = startTime + timeLimit -Date.now();
        timeLabel.textContent = (timeLeft/1000).toFixed(2); //toFixed(2)= decimal point 2
        
        /*repeat count down*/
        const timeoutId = setTimeout(() => {
            updateTimer();
        }, 10); //every 10 mili second
        
        if(timeLeft < 0){
            // reset isPlaying false to OFF
            isPlaying = false;
            
           clearTimeout(timeoutId);
            timeLabel.textContent = '0.00';
            //show 'GameOver'
            setTimeout(() => {
                //alert('Game Over');    
                //when game ends, call showResult function
                showResult();
            },100); //just avoid a bug
            
            //to replay
            target.textContent = 'click to replay!';
            
           }
    }
    
    function showResult(){
        /*const accuracy = 0;
        if(score + miss === 0){
            accuracy = 0;
        }
        else{
            accuracy = score / (score + miss)*100; 
        }*/
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
    }
    
    //when user clicked to start, then start the game!
    window.addEventListener('click', ()=>{
        if(isPlaying === true){
            return; // if isPlaying is already ON, then skip this function
           }
        //else, if isPlaying === false
        isPlaying = true;

        // in case user has replay, reset score and miss
        location = 0;
        score =0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word = words[Math.floor(Math.random()*words.length)];
        
        target.textContent = word;
        //record start time
        startTime=Date.now();
        updateTimer(); //my own function
        
        
    });
    
    // show what a user has typed.
    window.addEventListener('keydown', (event)=>{
        //console.log(event.key);
        
        // if user pressed something before the game, DO NOT count as miss.
        if(isPlaying !== true){
            return; //just skip this function.
           }
        
        /*check if location and word are the same*/    
        if(event.key === word[location]){
            console.log('score');
            location++;
            /*if location === length, then go to next word*/
            if(location === word.length){
                word = words[Math.floor(Math.random()*words.length)];
               //and reset location to zero
                location=0;
               }
            
            /* if success, delete current letter*/
            updateTarget(); //functoin
            
            score++;
            scoreLabel.textContent = score; /*show updated score*/
           }
        else{
            console.log('miss');
            miss++;
            missLabel.textContent = miss; /*show updated miss*/
        }
        
    });
    
    
    
    
    
    
}