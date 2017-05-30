(function() {
    window.onload = function() {
        joanne();
    }

    function joanne() {
        var personalityToggle = false;
        var $ = function(id){return document.getElementById(id);}
        console.log($("personality"));
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
