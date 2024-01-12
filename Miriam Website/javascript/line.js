// line graph

const trafficCanvas = document.getElementById("traffic-chart");
const timeFrameUL = document.getElementById("trafficNav");
const timeLi = document.querySelectorAll("traffic-nav-link");
const hour = document.getElementById("hourly");
const week = document.getElementById("weekly");
const month = document.getElementById("monthly");
const day = document.getElementById("daily");


const trafficDataMonth = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [500, 1200, 1000, 2000, 1500, 1750, 1250, 1800, 2200, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficDataWeek = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [300, 400, 450, 350, 450, 750, 650],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficDataDay = {
    labels: ["0-4", "4-8", "8-12", "12-16", "16-20", "20-24"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [15, 30, 125, 175, 150, 100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficDataHour = {
    labels: ["0-15", "15-30", "30-45", "45-60"],
    datasets: [{
        fill: true,
        tension: .5,
        data: [4, 4, 5, 8],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataMonth,
    options: trafficOptions
});

function removeClass() {
    let purple = document.querySelectorAll('.highlight');
    for ( let i = 0; i < purple.length; i++ ) {
        purple[i].classList.remove('highlight');
    }
}

hour.addEventListener('click', () => {
    removeClass();
    hour.classList.add('highlight');
    trafficChart.data = trafficDataHour;
    trafficChart.update();
    });

day.addEventListener('click', () => {
    removeClass();
    day.classList.add('highlight');
    trafficChart.data = trafficDataDay;
        trafficChart.update();
    });

week.addEventListener('click', () => {
    removeClass();
    week.classList.add('highlight');
    trafficChart.data = trafficDataWeek;
    trafficChart.update();
    });

month.addEventListener('click', () => {
    removeClass();
    month.classList.add('highlight');
    trafficChart.data = trafficDataMonth;
        trafficChart.update();
    });


// bar graph
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 120, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]
};

const dailyOptions = {
    aspectRatio: 1.4,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// pie chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});