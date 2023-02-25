function distanceFromHqInBlocks(blocks) {
    if (blocks > 42 ) {
        return blocks - 42
    } else if (blocks < 42 && blocks > 0) {
        return 42 - blocks
    } else {
        return "please enter a number"
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264    
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start) * 264)
    } else if (start > destination) {
        return ((start - destination) * 264) 
    } else {
        return "please enter a number"
    }
}

// let distanceInFeet = 

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
