/*global require*/
/*eslint-env es6*/

'use strict';

{
    class Panel{
        constructor()
        {
            //section is only used in this constructor, so no need of 'this'.
            const section = document.createElement('section');
            section.classList.add('panel');
            
            this.img = document.createElement('img');
            this.img.src = this.getRandomImage();
            
            this.stop = document.createElement('div');
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop');
            
            //if user stoped, then stop the spin
            this.timeoutId = undefined; //declare timeoutId
            this.stop.addEventListener('click',() => {
                /*if user pressed stop already, then skip*/
                if(this.stop.classList.contains('inactive')){
                    return;
                   }
            /*if user pressed stop, then make the button inactive to avoid double count*/
                this.stop.classList.add('inactive');
                
                clearTimeout(this.timeoutId);
                panelsleft --;
                
                if(panelsleft === 0){
                    /*if all stops are pressed, then reset*/
                    spin.classList.remove('inactive');
                    panelsleft =3;
                    checkResult();
                }
            } );
            
            
            section.appendChild(this.img);
            section.appendChild(this.stop);
            
            //add this section to the main
            const main = document.querySelector('main');
            main.appendChild(section);
            
        }
        
        //this method will be called in spin()
        getRandomImage()
        {
            const images =['img/seven.png','img/bell.png','img/cherry.png', ];
            
            return images[Math.floor(Math.random()*images.length)];
            
        }
        //create spin method inside of class Panel
        spin()
        {
            
            this.img.src=this.getRandomImage();
            this.timeoutId = setTimeout(() => {
                this.spin();
            }, 50);
        }
        
        // a function called from function checkResult() 
        isUnmatched(p1, p2)
        {
            if(this.img.src !== p1.img.src && this.img.src !== p2.img.src)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
        //function called from function checkResult() 
        unmatch()
        {
            this.img.classList.add('unmatched');
        }
        
        // function activate panel when user has pressed SPIN again.
        activate()
        {
            this.img.classList.remove('unmatched');
            this.stop.classList.remove('inactive');
        }
        
    }
    //function check result
    function checkResult() {
        if(panels[0].isUnmatched(panels[1], panels[2])){
            panels[0].unmatch();
           }
        if(panels[1].isUnmatched(panels[0], panels[2])){
            panels[1].unmatch();
           }
        if(panels[2].isUnmatched(panels[0], panels[1])){
            panels[2].unmatch();
           }
    }
    
    
    const panels = [
        new Panel(),
        new Panel(),
        new Panel(),    
    ];
    
    let panelsleft = 3;
    
    /*create spin: first get elements*/
    const spin = document.getElementById('spin');
    spin.addEventListener('click', () =>{
        
        /*if user hasn't pressed spin yet, then don't spin again*/
        if(spin.classList.contains('inactive')){
           return;
           }
        
        /*if user pressed spin, then make the button inactive*/
        spin.classList.add('inactive');
        
        /*if user clicked spin, do the following.*/
        panels.forEach(panel =>{
            /*if user has pressed spin, activate the panel again.*/
            panel.activate();
            
            panel.spin(); //call spin method
            
        });
        
        
    });
    
}