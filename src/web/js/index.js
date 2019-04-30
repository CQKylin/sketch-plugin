window.onload = function (){
    let barChart = echarts.init(document.querySelector("#bar-chart"),null,{
        renderer: "svg"
    });

    barChart.setOption(getBarChart());
}
function getBarChart() {
    return {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    }
}