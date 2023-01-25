function result() {

let in1 = document.getElementById('BPb').value;
document.getElementById('BPb').innerHTML = in1;
in1 = in1 * 0.048

let in2 = document.getElementById('BPs').value;
document.getElementById('BPs').innerHTML = in2;
in2 = in2 * 0.020

let in3 = document.getElementById('BPk').value;
document.getElementById('BPk').innerHTML = in3;
in3 = in3 * 0.015

let in4 = document.getElementById('kPb').value;
document.getElementById('kPb').innerHTML = in4;
in4 = in4 * 0.005

let in5 = document.getElementById('Bkaca').value;
document.getElementById('Bkaca').innerHTML = in5;
in5 = in5 * 0.4

let in6 = document.getElementById('kaleng').value;
document.getElementById('kaleng').innerHTML = in6;
in6 = in6 * 0.1

let btn = document.getElementById('btn');
let output = document.getElementById('out');

document.getElementById('out').innerHTML = (in1 + in2 + in3 + in4 + in5 + in6) * 365;
document.getElementById('simpan').innerHTML = "Untuk menyimpan hasil, harap screenshot halaman ini!!!!"

}

    document.getElementById('btn').addEventListener('click', result);

