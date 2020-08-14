let highlight = {
    start: new Date(2015, 6, 13),
    end: new Date(2015, 6, 19),
    backgroundColor: '#3faa56',
    color: '#ffffff',
    legend: 'CSS Conf.'
};

let highlight2 = {
    dates: [{
            start: new Date(2015, 6, 16),
            end: new Date(2015, 6, 7),
        },
        {
            start: new Date(2015, 6, 22),
            end: new Date(2015, 6, 23),
        }
    ],
    backgroundColor: '#e99c00',
    color: '#ffffff',
    legend: 'Holidays'
};

let datepicker = new Datepickk({
    container: document.querySelector('#datepicker'),
    inline: true,
    range: true,
    highlight: [highlight, highlight2]
});

datepicker.setData = new Data(2015, 6, 1);