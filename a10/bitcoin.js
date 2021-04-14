const config = {
    apiURL: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    updateInterval: 15
};

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    setInterval(fetchData, config.updateInterval * 1000);
});

const fetchData = function() {

    fetch(config.apiURL)
        .then(response => response.json())
        .then(renderData);
};


const renderData = function(data) {
    const _priceAll = document.querySelectorAll('.price1');
    let _priceHolder = [];
    Object.keys(data.bpi).forEach(key => {

        console.log(data.bpi[key].rate);
        _priceHolder.push(data.bpi[key].rate);
    });

    for (i = 0; i < _priceAll.length; i++) {
        _priceAll[i].innerHTML = _priceHolder[i];
    }

    const _time = document.querySelector('.time_updated');
    _time.innerHTML = data.time.updated;


};


