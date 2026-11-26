function calculateSwipes() {

    let swipes =
    Number(document.getElementById("swipes").value);

    let weeks =
    Number(document.getElementById("weeks").value);

    let perWeek =
    (swipes / weeks).toFixed(1);

    document.getElementById("result").innerHTML =
    "You can use approximately " +
    perWeek +
    " meal swipes per week.";
}
