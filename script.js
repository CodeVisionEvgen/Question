let btn = document.getElementById('btn'),
    quest = document.getElementById('quest-Box'),
    one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    num = 1,
    pOne = document.getElementById('m-One'),
    pTwo = document.getElementById('m-Two'),
    pThree = document.getElementById('m-Three'),
    score = 0;
    
    btn.onclick = (they => {
        if(num == 1) {
            if(two.checked) {
                score++;
            };
            num++;
            quest.innerHTML = 'UX/';
            pOne.innerHTML = 'UI';
            pTwo.innerHTML = 'API';
            pThree.innerHTML = 'FTP';
            return num;
        };
        if(num == 2) {
            if(one.checked) {
                score++;
            };
            quest.innerHTML = '.js';
            pOne.innerHTML = 'JavaScript';
            pTwo.innerHTML = 'Html';
            pThree.innerHTML = 'Css';
            num++;
            return num;
        };
        if(num == 3) {
            if(one.checked) {
                score++;
            };
            num++;
            quest.innerHTML = '.html';
            pOne.innerHTML = 'Python';
            pTwo.innerHTML = 'Java';
            pThree.innerHTML = 'Html';
            return num;
        };
        if(num == 4) {
            if(three.checked) {
                score++;
            };
            quest.innerHTML = 'Вы набрали: ' +score+" из 4";
            pOne.style.display = 'none';
            pTwo.style.display = 'none';
            pThree.style.display = 'none';
            one.style.display = 'none';
            two.style.display = 'none';
            three.style.display = 'none';
            return num;
        };
        console.log("score " + score);
        console.log("Num " + num);
    });