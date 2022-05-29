var items = [];
const btn = document.getElementById('btn').addEventListener('click', guardarNumeros)
function guardarNumeros() {
    boxvalue = Number(document.getElementById('box').value);
    items.push(boxvalue);
    document.getElementById('arr').innerHTML = [`${items}`]
}


function valuexx() {

    var e = document.getElementById("select");
    var selectValue = e.options[e.selectedIndex].value;
    if (selectValue === "1") {
        let arr = []
        for (let index = 0; index < items.length; index++) {
            if (items[index] > 0) {
                arr.push(items[index])
            }


        }
        const total = arr.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
        }, 0)

        document.getElementById('kq').innerHTML = total
    } else if (selectValue === "2") {
        let count = 0
        for (let index = 0; index < items.length; index++) {
            if (items[index] > 0) {
                count++
            }

        }
        document.getElementById('kq').innerHTML = `co ${count} so duong`
    } else if (selectValue === "3") {

        let min_val = items.reduce(function (accumulator, element) {
            return (accumulator < element) ? accumulator : element
        });
        document.getElementById('kq').innerHTML = `so nho nhat trong mang la ${min_val}`
    }
    else if (selectValue === "4") {

        let arr = []

        for (let index = 0; index < items.length; index++) {
            if (items[index] > 0) {
                arr.push(items[index])
            }

        }
        let min_val = arr.reduce(function (accumulator, element) {
            return (accumulator < element) ? accumulator : element
        });
        document.getElementById('kq').innerHTML = `so duong nho nhat trong mang la ${min_val}`
    }
    else if (selectValue === "5") {
        let kq = -1
        // for (var i = items.length - 1; i >= 0; i--) {
        //     if (items[i] % 2 === 0 && items[i] > 0) {
        //         kq = items[i]
        //     } else {
        //         kq = -1
        //     }
        // }
        for (let i = 0; i < items.length; i++) {
            if (items[i] % 2 == 0) {
                kq = items[i];
                // console.log(, 'iii');
            } else {
                kq = -1

            }
        }
        document.getElementById('kq').innerHTML = kq
    }
    else if (selectValue === "6") {
        let kq = -1
        document.getElementById('reverse').innerHTML += `<input type="number" id="valueReverse1" placeholder="Nhập vị trí 1" /> <br/> <input type="number" id="valueReverse2" placeholder="Nhập vị trí 2" /><br/> <button onClick="reverseValueInput()">Đổi</button>`
    }
    else if (selectValue === "7") {
        const a = interChangeSort(items)
        document.getElementById('kq').innerHTML = a
    }
    else if (selectValue === "8") {
        // checkNguyenTo(items)
    }
}
checkNguyenTo([1, 6, 3, 7, 5, 100])
kiem_tra_snt(7)
function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;

    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    } else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i !== 0) {
                flag = true;
                break;
            }
        }
    }
    // return flag
    // Kiểm tra biến flag
    if (flag == true) {
        document.write(n + " là số nguyên tố ");

    }
    else {
        document.write(n + " không phải là số nguyên tố ");
    }
}
function checkNguyenTo(array) {

    // let flad = true
    // let soNT
    for (let i = 0; i < array.length; i++) {
        var flag = true;

        // Nếu n bé hơn 2 tức là không phải số nguyên tố
        if (array[i] < 2) {
            flag = false;

        }
        else if (array[i] == 2) {
            flag = true;
        }
        else if (array[i] % 2 == 0) {
            flag = false;
        } else {
            // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
            for (var j = 3; j < Math.sqrt(array[i]); j += 2) {
                if (array[i] % j !== 0) {
                    flag = true;
                    break;
                }
            }
        }

        // Kiểm tra biến flag
        if (flag == true) {
            document.write(array[i] + " là số nguyên tố ");
            break;
        }
        else {
            document.write(array[i] + " không phải là số nguyên tố ");
        }

    }

}

function interChangeSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let t = array[i];
                array[i] = array[j];
                array[j] = t;
                return array
            }
        }
    }
}
function reverseValueInput() {
    const valueInput1 = Number(document.getElementById('valueReverse1').value)
    const valueInput2 = Number(document.getElementById('valueReverse2').value)

    const tmp = items[valueInput1]
    items[valueInput1] = items[valueInput2]
    items[valueInput2] = tmp
    document.getElementById('kq').innerHTML = items



}
valuexx()