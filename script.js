let facts = [
        "I am an Accounting major at Baylor University.",
        "I have experience as an Accounting Clerk.",
        "I serve as a Peer Leader helping students succeed.",
        "I am fluent in both English and Spanish.",
        "I enjoy strategy games and making strategic decisions, especially in checkers.",
        "One of my favorite personal challenges was completing 1,000 squats in about 3 hours.",
        "I tracked my progress toward 1,000 squats in a journal by completing 4 sets of 25 reps at a time."
    ];

    let randomFact =
    facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").innerHTML =
    randomFact;
}
