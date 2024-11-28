(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    function generateMessages() {
        var messages = [];
        for (var i = 0; i < names.length; i++) {
            var firstLetter = names[i].charAt(0).toLowerCase();
            if (firstLetter === 'j') {
                messages.push("Good Bye " + names[i]);
            } else {
                messages.push("Hello " + names[i]);
            }
        }
        return messages;
    }

    // Attach this function to global scope for button click
    window.displayMessages = function() {
        var messages = generateMessages();
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ""; // Clear previous output
        messages.forEach(function(message) {
            var p = document.createElement("p");
            p.textContent = message;
            outputDiv.appendChild(p);
        });
    };
})();
