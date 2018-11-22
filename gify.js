var topics = ["Sterling Archer", "Lana Kane", "Cheryl", "Pam", "Dr. Kreiger", "Cyril Figgis"];

function displayArcher() {
    var sterling = $(this).attr("gif-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sterling + "&limit=9&api_key=ai4ZETTuGArw9qvTalwvvl6F2azNH0Zw";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var bunchaGifs = response.data;
        for(var i = 0; i < bunchaGifs.length; i++) {
            var visibleGif = $('<img>');
            visibleGif.attr('src', bunchaGifs[i].visibleGif.fixed_height.url);
            $('.container').append(visibleGif);

        }
    });
}

function btnMaker() {
    $('#buttonview').empty();
    for (var i = 0; i < topics.length; i++){
        var dynoBtn = $('<button>')
        dynoBtn.addClass('topics');
        dynoBtn.attr('gif-name', topics[i]);
        dynoBtn.text(topics[i]);
        $('#buttonview').append(dynoBtn);
    }
}

$("#newArchGif").on("click", function() {
    var topics = $("#archer-input").val().trim();
    topics.push(sterling);
    makeButtons();
    return false; 
})

$(document).on('click', '.gif', function() {
    var condition = $(this).attr('gif-state');
    if (condition === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('gif-state', 'animate');
    }
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('gif-state', 'still');
    }
})

$(document).on("click", ".sterling", displayArcher);
btnMaker();