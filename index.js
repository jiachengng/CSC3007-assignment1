// data to populate table
var realtimedata = null;
var table = document.getElementById("maintable");

// data.gov.sg PSI API realtime dataset
const url = 'https://api.data.gov.sg/v1/environment/psi'

fetch(url)
    .then(response => response.json())
    .then(data => {
        realtimedata = data.items[0].readings
        console.log(realtimedata)

        Object.keys(realtimedata).map(key => {;

            var row = table.insertRow();

            var metric = row.insertCell();
            var national = row.insertCell();
            var central = row.insertCell();
            var west = row.insertCell();
            var east = row.insertCell();
            var north = row.insertCell();
            var south = row.insertCell();

            metric.innerHTML = key
            national.innerHTML = realtimedata[key].national
            central.innerHTML = realtimedata[key].central
            west.innerHTML = realtimedata[key].west
            east.innerHTML = realtimedata[key].east
            north.innerHTML = realtimedata[key].north
            south.innerHTML = realtimedata[key].south

        })

        Object.values(realtimedata).map(value => {
            console.log(value);

        })

        var timeStamp = new Date(data.items[0].update_timestamp).toLocaleString();
        document.getElementById("dateTime").innerHTML += " "+timeStamp;

    });