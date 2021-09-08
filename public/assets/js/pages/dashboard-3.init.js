function hexToRGB(a,e){
    var r=parseInt(a.slice(1,3),16),t=parseInt(a.slice(3,5),16),o=parseInt(a.slice(5,7),16);
    return e?"rgba("+r+", "+t+", "+o+", "+e+")":"rgb("+r+", "+t+", "+o+")"}!
    function(i){"use strict";
    function a(){
        this.$body=i("body"),
            this.charts=[]}a.prototype.respChart=function(e,r,t,o){
        var s=e.get(0).getContext("2d");Chart.defaults.global.defaultFontColor="#8391a2",
                Chart.defaults.scale.gridLines.color="#8391a2";
        var n=i(e).parent();return function(){var a;
        switch(e.attr("width",i(n).width()),r){case"Line":a=new Chart(s,{type:"line",data:t,options:o});
        break;case"Doughnut":a=new Chart(s,{type:"doughnut",data:t,options:o});
        break;case"Pie":a=new Chart(s,{type:"pie",data:t,options:o});
        break;case"Bar":a=new Chart(s,{type:"bar",data:t,options:o});
        break;case"Radar":a=new Chart(s,{type:"radar",data:t,options:o});
        break;case"PolarArea":a=new Chart(s,{data:t,type:"polarArea",options:o})}
        return a}()},a.prototype.initCharts=function(){
        var a=[],e=["#1abc9c","#f1556c","#4a81d4","#e3eaef"];
        if(0<i("#revenue-chart").length){
            var r={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
                datasets:[{label:"Current Week",
                    backgroundColor:hexToRGB((o=(t=i("#revenue-chart").data("colors"))?t.split(","):e.concat())[0],.3),
                    borderColor:o[0],data:[32,42,42,62,52,75,62]},
                    {
                        label:"Previous Week",fill:!0,
                        backgroundColor:"transparent",
                        borderColor:o[1],borderDash:[5,5],
                        data:[42,58,66,93,82,105,92]}]};a.push(
                            this.respChart(i("#revenue-chart"),
                                "Line",
                                r,
                                {maintainAspectRatio:!1,
                                    legend:{display:!1},
                                    tooltips:{intersect:!1},
                                    hover:{intersect:!0},
                                    plugins:
                                        {filler:{propagate:!1}},
                                    scales:{xAxes:[{
                                        reverse:!0,
                                            gridLines:{
                                            color:"rgba(0,0,0,0.05)"}}],
                                        yAxes:[{
                                        ticks:{stepSize:20},
                                            display:!0,
                                            borderDash:[5,5],
                                            gridLines:{
                                            color:"rgba(0,0,0,0)",
                                                fontColor:"#fff"}}]}}))}
        if(0<i("#projections-actuals-chart").length)
        {var t,o,s={
            labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            datasets:[{label:"Sales Analytics",
                backgroundColor:(o=(t=i("#projections-actuals-chart").data("colors"))?t.split(","):e.concat())[0],
                borderColor:o[0],
                hoverBackgroundColor:o[0],
                hoverBorderColor:o[0],data:[65,59,80,81,56,89,40,32,65,59,80,81],
                barPercentage:.7,
                categoryPercentage:.5},
                {label:"Dollar Rate",
                    backgroundColor:o[1],
                    borderColor:o[1],
                    hoverBackgroundColor:o[1],
                    hoverBorderColor:o[1],
                    data:[89,40,32,65,59,80,81,56,89,40,65,59],
                    barPercentage:.7,categoryPercentage:.5}]};
                a.push(this.respChart(i("#projections-actuals-chart"),"Bar",s,{
                    maintainAspectRatio:!1,
                    legend:{display:!1},
                    scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],
                        xAxes:[{stacked:!1,gridLines:{
                            color:"rgba(0,0,0,0.01)"}}]}}))}return a},
            a.prototype.init=function(){
        var e=this;Chart.defaults.global.defaultFontFamily="Nunito,sans-serif",
                    e.charts=this.initCharts(),i(window).on("resize",function(a){
                        i.each(e.charts,function(a,e){try{e.destroy()}catch(a){}}),
                            e.charts=e.initCharts()})},i.ChartJs=new a,
            i.ChartJs.Constructor=a}
            (window.jQuery),function(){"use strict";window.jQuery.ChartJs.init()}();