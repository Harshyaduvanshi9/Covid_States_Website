$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function (response) {
         console.log(response);
        console.log(response.Countries);
        for (let i = 0; i < response.Countries.length; i++) {
           
            var active = response.Countries[i].NewConfirmed - response.Countries[i].NewRecovered;
            var tabledata = `<tr><td>${response.Countries[i].Country}</td><td>${response.Countries[i].TotalConfirmed}</td><td>${active}</td><td>${response.Countries[i].TotalRecovered}</td><td>${response.Countries[i].TotalDeaths}</td></tr>`;
            $('#tbody').append(tabledata);

        }
        $('#covidtable').DataTable();


        


        

    },
    error: function (error) {
        console.log(error);
    }
})