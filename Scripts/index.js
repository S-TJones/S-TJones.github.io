
// Driver function
var driver = function(){

    // Website and Terminal buttons
    page_links = document.getElementsByClassName("page-link");
    buttons = document.getElementsByClassName("button");
    // Anchor Tag text
    a_tag = document.getElementsByClassName("anchor-text");

    // Left button
    buttons[0].addEventListener("mouseover", function(){

        other_icon = document.getElementsByClassName("fas fa-angle-left")[0];
        other_icon.classList.remove("hide");

        // Change Text
        a_tag[0].innerHTML = "Website View";
        
    });
    buttons[0].addEventListener("mouseout", function(){

        other_icon = document.getElementsByClassName("fas fa-angle-left")[0];
        other_icon.classList.add("hide");

        // Change Text
        a_tag[0].innerHTML = "Website";
        
    });

    // Right button
    buttons[1].addEventListener("mouseover", function(){

        other_icon = document.getElementsByClassName("fas fa-angle-right")[0];
        other_icon.classList.remove("hide");

        // Change Text
        a_tag[1].innerHTML = "Terminal View";
        
    });
    buttons[1].addEventListener("mouseout", function(){

        other_icon = document.getElementsByClassName("fas fa-angle-right")[0];
        other_icon.classList.add("hide");

        // Change Text
        a_tag[1].innerHTML = "Terminal";
        
    });
}

// Runs this function on startup
window.onload = driver;