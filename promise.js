function fetchData1() {
    return new Promise((resolve, reject) => {
      // simulate fetching some data from API with a 5-second delay
      setTimeout(() => {
        resolve("Data1");
      }, 5000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      // fetch some data from API
      resolve("Data2");
    });
  }
  
  function fetchData3() {
    return new Promise((resolve, reject) => {
      // fetch some data from API
      resolve("Data3");
    });
  }
  
  function fetchData4() { 
    return new Promise((resolve, reject) => {
      // fetch some data from API
      resolve("Data4");
    });
  }

  function fetchData5() {
    return new Promise((resolve, reject) => {
      // fetch some data from API
      resolve("Data5");
    });
  }
  
  function fetchData6() {
    return new Promise((resolve, reject) => {
      // fetch some data from API
      resolve("Data6");
    });
  }
  
  Promise.all([fetchData1(), fetchData2(), fetchData3(), fetchData4(), fetchData5(), fetchData6()])
    .then((results) => {
      console.log(results);
      // [ "Data1", "Data2", "Data3", "Data4", "Data5", "Data6" ]
    })
    .catch((error) => {
      console.error(error);
    });
  