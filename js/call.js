
 $(document).ready(function () {
          $.ajax({
url: 'https://www.instagram.com/barbers_at_no.11/?__a=1',
type: "GET",
dataType: "json",
success: function (data) {
	console.log(data);
	var src = "";
	var user = "<span><a class='userName' href = 'https://www.instagram.com/barbers_at_no.11/'>Barbers @ no.11 </a></span>";

	for(let i = 0; i < 12; i++){
    imgsrc = data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url;
    var length = Object.keys(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges).length
    document.getElementById("feed-div").innerHTML+= "<div class='column'>" + "<img src ='" + imgsrc
    + "'/>" + "</div>";

    /* if(length != 0){ */
    /*capsrc =  data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text;*/
    /*document.getElementById("feed-div").innerHTML+= "<p class='caption'>" + user + " " + capsrc + "</p>"*/
	/*} else {*/
	/*	document.getElementById("feed-div").innerHTML+= "<p class='caption'>" + user + "</p>"*/
	/*}*/
  }

/*  document.getElementById("feed-div").innerHTML+= "<div id='more-background'><a id='more' href='https://www.instagram.com/barbers_at_no.11/''>"
  + "<h3>More</h3></a></div>"*/
}
});
       });
