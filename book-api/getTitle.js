const bookSearch = async (isbn) => {
    const url = "https://openlibrary.org/isbn/" + isbn + ".json";
    const results = await fetch(url)
    console.log(await results.json())
}

