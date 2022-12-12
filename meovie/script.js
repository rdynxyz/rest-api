function searchMovie(){
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
                    <div class="col-span-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="h-3/4 relative overflow-hidden">
                            <img class="rounded-t-lg w-full " src="${data.Poster}"/>
                        </div>
                        <div class="px-5 pt-5">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${data.Title}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.Year}</p>
                            <label for="my-modal" class="see-detail cursor-pointer text-sm font-medium text-center text-blue-500 rounded-lg" data-id="${data.imdbID}"> Detail </label>
                        </div>
                    </div>`)
                })
            } else {
                $('#section-content').html(`<h1 class="text-5xl text-center">${result.Error}</h1>`)
            }
        }
    })
    $('#search-input').val('')
}

$('#search-button').on('click', function(){
        searchMovie();
    });
    $('#movie-list').on('click', '.see-detail', function(){
        $.ajax({
            url: 'http://omdbapi.com',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey': '6cb9613d',
                'i': $(this).data('id')
            },
            success: function(result){
                if (result.Response == "True"){
                    $('.modal-boxx').html(`
                        <img class="rounded-t-lg w-[200px]" src="${result.Poster}"/>
                        <div class="ml-5">
                            <h3 class="font-bold text-lg">${result.Title}</h3>
                            <p class="mt-4">Year: ${result.Year}</p>
                            <p class="mt-4">Released: ${result.Released}</p>
                            <p class="mt-4">Genre: ${result.Genre}</p>
                        </div>
                    `)
                }
            } 
        })
    })