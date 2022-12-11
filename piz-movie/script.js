$('#search-button').on('click', function(){
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey' : '6cb9613d',
            's' : $('#search-input').val()
        },
        success: function(result){
            if(result.Response == "True"){
                let movies = result.Search;
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg w-full" src="${data.Poster}" alt="" />
                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.Title}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Release : ${data.Year}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">imdbID : ${data.imdbID}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Type : ${data.Type}</p>
                            <button class="detail inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="staticModal" data-modal-target="staticModal">Detail
                            </button>
                        </div>
                        </div>
                    `)
                })
                // $('.detail').on('click', function(){
                //     console.log('horasss')
                // })
                // $('#search-input').val('');
                // console.log(result)
            }else{
                $('#movie').html(`<h1 class="text-4xl text-center mt-10">${result.Error}</h1>`)
                console.log(result)
            }
        }
    })
    console.log("hi")
});