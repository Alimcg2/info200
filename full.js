(function() {
    var $ = function(id){return document.getElementById(id);}
    window.onload = function() {
        $("nearMe").onclick = nearMe;
        $("backImg").onclick = backToDash;
        $("calendar").onclick = calendar;
        $("messaging").onclick = messaging;
        $("beth").onclick = beth;
        $("helpQueue").onclick = queue;
        $("allResidents").onclick = allResidents;
    }
    function nearMe() {
        $("title").innerHTML = "Residents Near Me";
        $("dashMain").classList.add("hidden");
        $("mapMain").classList.remove("hidden");
        $("backImg").classList.remove("hidden");
    }
    function calendar() {
        $("title").innerHTML = "Calendar";
        $("dashMain").classList.add("hidden");
        $("calMain").classList.remove("hidden");
        $("backImg").classList.remove("hidden");
    }
    function messaging() {
        $("title").innerHTML = "Messaging";
        $("dashMain").classList.add("hidden");
        $("messageMain").classList.remove("hidden");
        $("backImg").classList.remove("hidden");
        $("bethMain").classList.add("hidden");
        $("backImg").onclick = backToDash;
    }
    function beth() {
        $("messageMain").classList.add("hidden");
        $("bethMain").classList.remove("hidden");
        $("backImg").onclick = messaging;
    }
    
    function allResidents() {
        $("title").innerHTML = "All Residents";
        $("dashMain").classList.add("hidden");
        $("allMain").classList.remove("hidden");
        $("backImg").classList.remove("hidden");
    }
        
    function queue() {
        console.log("hlskdj");
        $("title").innerHTML = "Help Queue";
        $("dashMain").classList.add("hidden");
        $("queueMain").classList.remove("hidden");
        $("backImg").classList.remove("hidden");
    }
    
    function backToDash() {
        $("title").innerHTML = "Dashboard";
        $("dashMain").classList.remove("hidden");
        $("mapMain").classList.add("hidden");
        $("backImg").classList.add("hidden");
        $("calMain").classList.add("hidden");
        $("messageMain").classList.add("hidden");
        $("allMain").classList.add("hidden");
        $("queueMain").classList.add("hidden");
    }
        

    function joanne() {
        var personalityToggle = false;
        $("personality").addEventListener('click', personality);
        $("personality").addEventListener('touchstart', personality);
        var needsToggle = false;
        console.log($("needs"));
        $("needs").addEventListener('click', needs );
        $("needs").addEventListener('touchstart', needs );
        var medicalToggle = false;
        $("medical").addEventListener('click', medical );
        $("medical").addEventListener('touchstart', medical );
        var reminderToggle = false;
        $("reminder").addEventListener('click', reminder );
        $("reminder").addEventListener('touchstart', reminder );
        var mapToggle = false;
        $("joanneMap").addEventListener('click', map );
        $("joanneMap").addEventListener('touchstart', map );                      
       function personality() {
            if (personalityToggle == false) {
                $("personality-hidden").classList.remove("hidden");
                $("personality-img").src = "down.svg";
                personalityToggle = true;
            } else if (personalityToggle == true) {
                $("personality-hidden").classList.add("hidden");
                personalityToggle = false;
                $("personality-img").src = "dots.svg";
            }
        }
        
       function needs() {
            if (needsToggle == false) {
                $("needs-hidden").classList.remove("hidden");
                needsToggle = true;
                $("needs-img").src = "down.svg";
            } else if (needsToggle == true) {
                $("needs-hidden").classList.add("hidden");
                needsToggle = false;
                $("needs-img").src = "dots.svg";
            }
        }

      function medical() {
            if (medicalToggle == false) {
                $("medical-hidden").classList.remove("hidden");
                medicalToggle = true;
                $("medical-img").src = "down.svg";
            } else if (medicalToggle == true) {
                $("medical-hidden").classList.add("hidden");
                medicalToggle = false;
                $("medical-img").src = "dots.svg";

            }
        }
        function reminder() {
            if (reminderToggle == false) {
                $("reminder-hidden").classList.remove("hidden");
                reminderToggle = true;
                $("reminder-img").src = "down.svg";
            } else if (reminderToggle == true) {
                $("reminder-hidden").classList.add("hidden");
                reminderToggle = false;
                $("reminder-img").src = "dots.svg";

            }
        }
        function map() {
            if (mapToggle == false) {
                $("map-hidden").classList.remove("hidden");
                $("extraspace").classList.remove("hidden");
                $("map-img").src = "down.svg";
                mapToggle = true;
            } else if (mapToggle == true) {
                $("map-hidden").classList.add("hidden");
                $("extraspace").classList.add("hidden");
                mapToggle = false;
                $("map-img").src = "dots.svg";

            }
        }
    }
})();
