function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      let error = false;

      if (error) {
        throw new Error("Fetch failed");
      }

      callback("Data fetched");
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

fetchDataWithCallback(function (message) {
  console.log(message);
});