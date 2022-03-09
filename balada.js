var contador = 1;

function luzes() {
    //setInterval(mudaCor(),500);
    setInterval(() => {
        switch (contador) {
                case 1:
                document.body.style.backgroundColor = 'orange';
                break;
                case 2:
                document.body.style.backgroundColor = 'blue';
                break
                case 3:
                document.body.style.backgroundColor = 'green';
                break
                case 4:
                document.body.style.backgroundColor = 'gray';
                break
                case 5:
                document.body.style.backgroundColor = 'black';
                break
                case 6:
                document.body.style.backgroundColor = 'purple';
                break
                case 7:
                document.body.style.backgroundColor = 'yellow';
            }
            if(contador == 7) {
                contador = 1;
            } else { 
                contador++;
            }
    }, 200);

}
