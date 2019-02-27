/*
  this file will create a function that fetches the reddit api with 1 argument that will be a string and be given by the user.
*/

fetch('https://www.reddit.com/r/leagueoflegends.json', { mode: 'cors' })
  .then(function (res) {
    // readable stream
    if (!res.ok) {
      return console.log('something went wrong when requesting the data')
    }
    return res.json();
  })
  .then(function (json) {
    // the API returns the data in a very nested object.
    const nestedData = json.data.children;

    nestedData.forEach(function (apiData) {
      apiData = apiData.data;
      let data = extractDataFromApi(apiData);
      console.log(data);
    });
  })
  .catch(function (err) {
    if (err) return console.log(err);
  })

function extractDataFromApi (obj) {
  let data = {};

  data.author = obj.author;
  data.title = obj.title;
  data.text = obj.selftext;
  data.url = obj.url;

  return data;
}