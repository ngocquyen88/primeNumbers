function displayPrimeNumbers() {
    let numbers = prompt("Nhập vào số lượng số nguyên tố mà bạn muốn in ra:");
    let count = 0;
    let N = 2;

    do {
        let input = prompt("Input a integer number:");
        let i = 0;
        let dem = 0;
        if (input == 2) {
            console.log(2);
            count++;
        } else {
            if (input < 2) {
                input = prompt("Input a integer number:");
            } else if (input > 2) {
                for (i = 2; i < input; i++) {
                    if (input % i == 0) {
                        dem++;
                    }
                }
                if (dem == 0) {
                    console.log(input);
                    count++;
                }
            }
        }
    }while(count<numbers);
}

displayPrimeNumbers();