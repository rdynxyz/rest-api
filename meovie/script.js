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
            let rating = result.Ratings[0].Value;
            if (result.Response == "True"){
                $('.modal-boxx').html(`
                    <img class="rounded-t-lg w-[200px]" src="${result.Poster}"/>
                    <div class="ml-5">
                        <h3 class="font-bold text-lg p-2 border-x-[1px] border-y-[1px]">${result.Title}</h3>
                        <p class="p-2 border-x-[1px] border-b-[1px]">Year : ${result.Year}</p>
                        <p class="p-2 border-x-[1px] border-b-[1px]">Released : ${result.Released}</p>
                        <p class="p-2 border-x-[1px] border-b-[1px]">Genre : ${result.Genre}</p>
                        <p class="p-2 border-x-[1px] border-b-[1px]">Actors : ${result.Actors}</p>
                        <p class="p-2 border-x-[1px] border-b-[1px]">Ratings : ${rating}</p>
                    </div>
                `)
            }
        } 
    })
})

$('#search-button').on('click', function(){
        searchMovie();
    });

$('#search-input').on('keyup', function(e){
    if (e.keyCode === 13){
        console.log('ajsdhbaskjhd')
        searchMovie()
    }
})