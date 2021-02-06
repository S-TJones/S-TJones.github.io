
// Driver function
var driver = function(){

    // Website and Terminal buttons
    page_links = document.getElementsByClassName("page-link");

    // Left button
    page_links[0].addEventListener("mouseover", function(){
        

        other_icon = document.getElementsByClassName("fas fa-angle-left")[0];
        other_icon.classList.remove("hide");

        setTimeout(() => {  
            // Anchor Tag text
            a_tag = document.getElementsByClassName("anchor-text");
            // Change Text
            a_tag[0].innerHTML = "Website View";
        }, 1000);
        
    });
    page_links[0].addEventListener("mouseout", function(){
        

        other_icon = document.getElementsByClassName("fas fa-angle-left")[0];
        other_icon.classList.add("hide");

        // Anchor Tag text
        a_tag = document.getElementsByClassName("anchor-text");
        // Change Text
        a_tag[0].innerHTML = "Website";
    });

    // Right button
    page_links[1].addEventListener("mouseover", function(){
        // Change Text
        page_links[1].innerHTML = "Website View";

        other_icon = document.getElementsByClassName("fas fa-angle-right")[0];
        other_icon.classList.remove("hide");
    });
    page_links[1].addEventListener("mouseout", function(){
        // Change Text
        page_links[1].innerHTML = "Website View";

        other_icon = document.getElementsByClassName("fas fa-angle-right")[0];
        other_icon.classList.add("hide");
    });
}

// Runs this function on startup
window.onload = driver;