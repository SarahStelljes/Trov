const settings = [
    {
        "url": "https://api.thedogapi.com/v1/breeds?limit=10&page=0"
    },
    {
        "url": "https://api.thecatapi.com/v1/breeds?limit=10&page=0"
    }
]

$.ajax(settings).done(function (response) {
	console.log(response);
});

