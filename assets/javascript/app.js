//Setup Variables
var authKey = "b1fe253f41ce4e66819bdb044a84a61e";

var searchInput = "";
var numArticles = 0;
var startYear = 0;
var endYear = 0; 

var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

//on click function to start 


	$("#search").click(function(){
		searchInput = $("#inputDefault").val()
        var queryURL = queryURLBase + searchInput;

        $.ajax({
        	url: queryURL,
        	method: "GET"
        }).done(function(response){
        	console.log(response);




        }).fail(function(err){
        	throw err;
        })

	});