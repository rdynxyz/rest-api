function allMenu (){
    $.getJSON('data/pizza.json', function (data){
        let menu = data.menu;
        $.each(menu, function (i, data){
            $('#daftar-menu').append('<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"><img class="rounded-t-lg w-full" src="./img/menu/'+ data.gambar +'"><div class="p-5"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">'+ data.nama +'</h5><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">'+ data.deskripsi +'</p><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rp '+ data.harga +'</h5><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Pesan Sekarang</a></div></div>')
        })
    })
}
allMenu()

$('.nav-link').on('click', function (){
    $('.nav-link').removeClass('text-white');
    $(this).addClass('text-white')

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu'){
        allMenu()
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data){
            if (data.kategori == kategori.toLowerCase()){
                content += '<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"><img class="rounded-t-lg w-full" src="./img/menu/'+ data.gambar +'"><div class="p-5"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">'+ data.nama +'</h5><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">'+ data.deskripsi +'</p><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rp '+ data.harga +'</h5><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Pesan Sekarang</a></div></div> '
            }
        })
        $('#daftar-menu').html(content)
    })

})