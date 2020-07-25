const prime = (number = 0) => {
    if (number < 2) {
        return false
    }

    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        } else {
            continue;
        }
    }

    return true;
}

module.exports = prime;