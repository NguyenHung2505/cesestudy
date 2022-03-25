let nhacNen = new Audio("sakura.mp3")
nhacNen.loop=true
let nhacNhay = new Audio("onichang.mp3")
let nhacvacham = new Audio("quec.mp3")

function start() {
    const dino = document.getElementById('dino');
    const rock = document.getElementById('rock');
    const score = document.getElementById('score');

    function jump (){
        dino.classList.add("jump-animation");
        setTimeout(() =>{
            dino.classList.remove('jump-animation');
            // jump-animation: nhảy hoạt cảnh
        }, 1800);
    }



    // sự kiện liên kết phím ấn thả
    window.addEventListener('keypress', () =>{
        if(!dino.classList.contains('jump-animation')){
            nhacNhay.play()
            jump();
        }
    });

    setInterval(()=> {
        score.innerText++;
        // ghi bàn trong..++.
        const dinoTop = parseInt(window.getComputedStyle(dino)
            .getPropertyValue('top'));
        const rockLeft = parseInt(window.getComputedStyle(rock)
            .getPropertyValue('left'));
        if (rockLeft < 0) {
            rock.style.display = 'none';
        } else{
            rock.style.display ='';
        }
        // toạ độ khi bị va chạm giữa ngựa và vật
        if (rockLeft < 140 && rockLeft > 100 && dinoTop >500){
            nhacvacham.play()
            alert("you got a score of:" + score.innerText +
                "\n\nPlay again?");
            location.reload();
        }

    }, 50);

}