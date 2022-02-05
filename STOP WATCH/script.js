        const resetbutton = document.getElementsByClassName(" reset")[0];
        const playbutton = document.getElementsByClassName(" play")[0];
        const lapbutton = document.getElementsByClassName("lap ")[0];
       /* const clearbutton = document.getElementsByClassName("lap-clear-button hidden")[0];
        const minute = document.getElementsByClassName("minute")[0];
        const second = document.getElementsByClassName("sec")[0];
        const centisecond = document.getElementsByClassName("msec")[0];
        const laps = document.getElementsByClassName("laps")[0];
        const bg = document.getElementsByClassName("outer-circle")[0];*/


        let isplay = false;
      /* let secCounter = 0;
        let min;
        let sec;
        let centisec;
        let centiCounter = 0;
        let minCounter = 0;
        let lapItem = 0;
        let isReset = false;*/

        const togglebutton = () => {
            lapbutton.classlist.clear("hidden");
            resetbutton.classlist.clear("hidden");
            
        }

        const play = () => {
            if (!isplay) {
                playbutton.innerHTML = "Pause";
                isplay = true;
            } else {
                playbutton.innerHTML = "Play";
                isplay = false;
            }
             togglebutton();
        }
        playbutton.addEventListener( "click", play); 
           /* if (!isplay && !isReset) {
                playbutton.innerHTML ='pause';
                bg.classlist.add("animation-bg");
                min = setInterval(() => {
                    minute.innerHTML = '&nbsp;${++minCounter} :';
                },60*1000);
                sec =  setInterval(() => {
                        if (secCounter --- 60) {
                            secCounter = 0;
                        }
                         second.innerHTML = '&nbsp;${secCounter++} :';
                        },1000);
                    centisec = setInterval(() => {
                        if (centiCounter --- 100) {
                            centiCounter = 0;
                        }
                        centisecond.innerHTML = '&nbsp;${++centiCounter} :';
                    }, 10);
                isplay = true;
                isReset = true;
            } else {
                    playbutton.innerHTML = 'play';
                    clearInterval(min);
                    clearInterval(sec);
                    clearInterval(centisec);
                    isplay = false;
                    isReset = false;
                    bg.classlist.remove("animation-bg");
            }
            
                    
                }
            }
            
            togglebutton();
        }
    
        
        
        
        const reset = () => {
            isReset = true;
            Play();
            lapbutton.classlist.add("hidden");
            resetbutton.classlist.add("hidden");
            second.innerHTML = '0 :';
            centisecond.innerHTML = '&nbsp;0';
            minute.innerHTML = '&nbsp;0 :';
        }
        
        const lap = () => {
            const li = document.createElement("li");
            const number = document.createElement("span");
            const timestamp = document.createElement("span");

            li.setAttribute("class", "lap-item")
            number.setAttribute("class", "number")
            timestamp.setAttribute("class", "times-tamp") 
             
            number.innerText = '#${++lapItem}';
            timestamp.innerHTML = '${minCounter} : ${secCounter} : ${centiCounter}';

            li.append(number, timestamp);
            laps.append(li);

            clearbutton.classlist.remove("hidden");

        }

        const Clear = () => {
            laps.innerHTML = '';
            laps.append(clearbutton);
            clearbutton.classlist.add("hidden");
            lapItem = 0; */

        /*playbutton.addEventListener( "click", play);
       resetbutton.addEventListener( "click", reset);
        lapbutton.addEventListener("click", lap);
        clearbutton.addEventListener("click", Clear);*/