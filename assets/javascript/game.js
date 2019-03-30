//entry number is selected at random
//entry number is written into entries div
//number does not change until player either wins or losses
$("div.entries").toggleclass(function() {
    let entryNumber = [44, 32, 68, 45, 53, 57];
    entryNumber[Math.floor(Math.random() * entryNumber.length)];
    $("div.entries").text(entryNumber);

})