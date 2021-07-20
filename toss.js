    /*Toss of flip coin */
    const HEADS = 0;
    let toss = Math.floor(Math.random() * 10) % 2;

    if (toss == HEADS) {
        console.log("Toss is HEADS");
    } else {
        console.log("Toss is TAILS");
    }
