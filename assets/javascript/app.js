//Setup Variables
var authKey = "b1fe253f41ce4e66819bdb044a84a61e";

var searchInput = "";
var numArticles = 0;  
var startYear = 0; 
var endYear = 0;  

var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

//on click function to start

	$("#search-btn").click (function(){
                alert("Test this function is invoked on click of search button");
                searchInput = $("#search").val();
                //$("#num-records").val(); //may "for" attribute to properly store this selection in the variable see line 34 in the HTML
                startYear = $("#start-year").val();
                endYear = $("#end-year").val();
                console.log(searchInput);
                console.log(startYear);
                console.log(endYear);


         var queryURL = queryURLBase + "&q=" + searchInput;
         //This logic validates and builds the URL
                //This represents the start year query, the validation format by NYT requires the YYYYMMDD format
                //we concatenated the year inside the condition so we didn't conflict with the parseInt function type number, not string.
                if (parseInt(startYear)){
                        startYear = startYear + "0101";
                        queryURL = queryURL + "&begin_date=" + startYear;
                }

                //This represents the end year query, the validation format by NYT requires the YYYYMMDD format
                //we concatenated the year inside the condition so we didn't conflict with the parseInt function type number, not string.
                if (parseInt(endYear)){
                        endYear = endYear + "1231"
                        queryURL = queryURL + "&end_date=" + endYear;
                }

                //This represents a general search query------using parseInt(startYear) in this condition is a cleaner way to validate infromation in the year form.
                if (searchInput !== "" && numArticles !== 0 && startYear !== 0 && endYear !== 0){
                        queryURL = queryURL  + "&page=" +numArticles+ "&begin_date=" + startYear + "&end_date=" + endYear;
                }

                //This represents a page query, only the third option requires a second page: ?page=2
                else if (numArticles !== 0){
                        queryURL = queryURL + "&page=" + numArticles;
                }

                

		
        
        console.log(queryURL);

        $.ajax({
        	url: queryURL,
        	method: "GET"
        }).done(function(response){
                console.log(queryURL);
        	console.log(response);

        }).fail(function(err){
                throw err;
        });
        //This statement supposedly stop the search button from reloading the page, since it's type attribute =submit
        return false;

	});
