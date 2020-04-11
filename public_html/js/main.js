/* global google */

let choose = document.getElementById("emprestimo");
        function calcparcelas() {
        var a = "6x";
                var b = "8x";
                var c = "10x";
                var d = "12x";
                var e = "18x";
                var f = "Voltar";
                document.getElementById("10k").innerHTML = a;
                document.getElementById("20k").innerHTML = b;
                document.getElementById("30k").innerHTML = c;
                document.getElementById("40k").innerHTML = d;
                document.getElementById("50k").innerHTML = e;
                document.getElementById("value_alt").innerHTML = f;
                document.getElementById("parc").innerHTML = "Em quantas vezes?";
                }

function digitarvalor() {
var a = "R$ 10.000";
        var b = "R$ 20.000";
        var c = "R$ 30.000";
        var d = "R$ 40.000";
        var e = "R$ 50.000";
        var f = "Outro Valor";
        document.getElementById("10k").innerHTML = a;
        document.getElementById("20k").innerHTML = b;
        document.getElementById("30k").innerHTML = c;
        document.getElementById("40k").innerHTML = d;
        document.getElementById("50k").innerHTML = e;
        document.getElementById("value_alt").innerHTML = f;
        document.getElementById("parc").innerHTML = "Quanto você precisa?";
        }