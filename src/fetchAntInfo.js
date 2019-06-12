const URL = "https://antserver-blocjgjbpw.now.sh/graphql?query={%20ants%20{%20name%20length%20color%20weight%20}%20}";

function fetchAntInfo() {
    return fetch(URL)
        .then(data => data.json())
}

export default fetchAntInfo;