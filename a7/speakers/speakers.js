let file;

$(document).ready(function() {
    $("#nav_list a").click(function() {
        const title = this.getAttribute('title');
        const url = "json_files/" + title + ".json";
        $.getJSON(url, function(data) {
            const speaker = data.speakers[0];
            let html = "<h1>" + speaker.title + "</h1>";
            html += "<img src =" + speaker.image + ">";
            html += "<h2>" + speaker.month + "</h2>";
            html += "<p>" + speaker.text + "</p>";
            $('main').html(html);

        });
    });

}); // end ready

