function deactivate(){
    if (document.getElementById("housingmenu").classList.contains("active")){
        document.getElementById("housingmenu").classList.remove("active");
        document.getElementById("housingContainer").classList.remove("active");
    }

    if (document.getElementById("personalprofile").classList.contains("active")){
        document.getElementById("personalprofile").classList.remove("active");
        document.getElementById("pMenuContainer").classList.remove("active");
    }

    if (document.getElementById("recreationmenu").classList.contains("active")){
        document.getElementById("recreationmenu").classList.remove("active");
        document.getElementById("recreationContainer").classList.remove("active");
    }

    if (document.getElementById("commercialmenu").classList.contains("active")){
        document.getElementById("commercialmenu").classList.remove("active");
        document.getElementById("commercialContainer").classList.remove("active");
    }
    
    if (document.getElementById("foodmenu").classList.contains("active")){
        document.getElementById("foodmenu").classList.remove("active");
        document.getElementById("foodContainer").classList.remove("active");
    }

    if (document.getElementById("transportmenu").classList.contains("active")){
        document.getElementById("transportmenu").classList.remove("active");
        document.getElementById("transportContainer").classList.remove("active");
    }
}

function togglePMenu(){
    deactivate();
    document.getElementById("personalprofile").classList.add("active");
    document.getElementById("pMenuContainer").classList.add("active");    
}

function toggleHMenu(){
    deactivate();
    document.getElementById("housingmenu").classList.add("active");
    document.getElementById("housingContainer").classList.add("active")
}

function toggleRMenu(){
    deactivate();
    document.getElementById("recreationmenu").classList.add("active");
    document.getElementById("recreationContainer").classList.add("active")
}

function toggleCMenu(){
    deactivate();
    document.getElementById("commercialmenu").classList.add("active");
    document.getElementById("commercialContainer").classList.add("active")
}

function toggleFMenu(){
    deactivate();
    document.getElementById("foodmenu").classList.add("active");
    document.getElementById("foodContainer").classList.add("active")
}


function toggleTMenu(){
    deactivate();
    document.getElementById("transportmenu").classList.add("active");
    document.getElementById("transportContainer").classList.add("active")
}