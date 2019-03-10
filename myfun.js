function thisFunc(){
	console.log('Yashas');
}

function myfun()
{window.location.assign("eval3.html")

	console.log('Yashas');
var tr=document.getElementById("t").value;
var n2=document.getElementById("ans").innerHTML=(2.5/tr).toFixed(4);
var w1=document.getElementById("w1").value;
document.getElementById("wt1").innerHTML=w1;
var w2=document.getElementById("w2").value;
document.getElementById("wt2").innerHTML=w2;
var w3=document.getElementById("w3").value;
var w3=document.getElementById("w3").value;
document.getElementById("wt3").innerHTML=w3;
var w4=document.getElementById("w4").value;
document.getElementById("wt4").innerHTML=w4;
var w5=document.getElementById("w5").value;
document.getElementById("wt5").innerHTML=w4;
var Co=document.getElementById("w").value;
var T1=document.getElementById("t1").value;
document.getElementById("tr1").innerHTML=T1;
var T2=document.getElementById("t2").value;
document.getElementById("tr2").innerHTML=T2;
var T3=document.getElementById("t3").value;
document.getElementById("tr3").innerHTML=T3;
var T4=document.getElementById("t4").value;
document.getElementById("tr4").innerHTML=T4;
var T5=document.getElementById("t5").value;
document.getElementById("tr5").innerHTML=T5;
var V1=document.getElementById("V1").innerHTML=(0.2/w1).toFixed(4);
var V2=document.getElementById("V2").innerHTML=(0.2/w2).toFixed(4);
var V3=document.getElementById("V3").innerHTML=(0.2/w3).toFixed(4);
var V4=document.getElementById("V4").innerHTML=(0.2/w4).toFixed(4);
var V5=document.getElementById("V5").innerHTML=(0.2/w5).toFixed(4);

var c1=document.getElementById("c1").innerHTML=(6.35*n2*T1).toFixed(4);
var c2=document.getElementById("c2").innerHTML=(6.35*n2*T2).toFixed(4);
var c3=document.getElementById("c3").innerHTML=(6.35*n2*T3).toFixed(4);
var c4=document.getElementById("c4").innerHTML=(6.35*n2*T4).toFixed(4);
var c5=document.getElementById("c5").innerHTML=(6.35*n2*T5).toFixed(4);

var lc1=document.getElementById("lc1").innerHTML=Math.log(c1).toFixed(4);
var lc2=document.getElementById("lc2").innerHTML=Math.log(c2).toFixed(4);
var lc3=document.getElementById("lc3").innerHTML=Math.log(c3).toFixed(4);
var lc4=document.getElementById("lc4").innerHTML=Math.log(c4).toFixed(4);
var lc5=document.getElementById("lc5").innerHTML=Math.log(c5).toFixed(4);

var vc1=document.getElementById("vc1").innerHTML=(V1*(Co-c1)).toFixed(4);
var vc2=document.getElementById("vc2").innerHTML=(V2*(Co-c2)).toFixed(4);
var vc3=document.getElementById("vc3").innerHTML=(V3*(Co-c3)).toFixed(4);
var vc4=document.getElementById("vc4").innerHTML=(V4*(Co-c4)).toFixed(4);
var vc5=document.getElementById("vc5").innerHTML=(V5*(Co-c5)).toFixed(4);

var lvc1=document.getElementById("lvc1").innerHTML=Math.log(vc1).toFixed(4);
var lvc2=document.getElementById("lvc2").innerHTML=Math.log(vc2).toFixed(4);
var lvc3=document.getElementById("lvc3").innerHTML=Math.log(vc3).toFixed(4);
var lvc4=document.getElementById("lvc4").innerHTML=Math.log(vc4).toFixed(4);
var lvc5=document.getElementById("lvc5").innerHTML=Math.log(vc5).toFixed(4);

var ctx = document.getElementById("canvas1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        
        datasets: [{
            label: '',
            data: [{
                x: lc1,
                y: lvc1
            }, {
                x: lc2,
                y: lvc2
            }, {
                x: lc3,
                y: lvc3
            }, {
				x:lc4,
				y:lvc4
			}, {
				x:lc4,
				y:lvc4
			}],
			
            backgroundColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
        }]
    },
	options:{
   scales: {
				xAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 0)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(C*)'
					}
				}],
				yAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 1)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(V*(Co-C*)'
					}
				}]
			}
	}
});
}