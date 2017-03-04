//Setup Variables
var authKey = "568297530230411eade03711b5fe7fcc";

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