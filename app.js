
fetch("./data.json")
  .then(res =>  res.json())
  .then(data => {
    console.log(data);
    const barChart = document.getElementById("barChart").getContext("2d");

const labelX = data.map(item => item.day);
console.log(labelX);

const labelY = data.map(item => item.amount);
console.log(labelY);



new Chart(barChart,{
    type:"bar",
    data:{
    labels:labelX,
    datasets:[{
        backgroundColor:"rgba(236, 119, 95, 1)",
        data:labelY,
        borderRadius : {
        topLeft: 3,     // Set the top-left corner rounding
        topRight: 3,    // Set the top-right corner rounding
        bottomLeft: 3,  // Set the bottom-left corner rounding
        bottomRight:3
        },
        hoverBackgroundColor : "rgba(102, 170, 179, 1)",
     
    }]
},
options:{
    scales:{
        x:{
            grid:{
                display:false
            },
            border:{
                display:false
            }
        },
        y:{
            grid:{
                display:false
            },
            ticks:{
                display:false
            },
            border:{
                display:false
            }
        }
    },
    plugins:{
        legend:{
            display:false
        }
    }
}
})
})
  .catch(err => console.log(err))



