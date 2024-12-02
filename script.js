const probeApi = async (url, requestData) => {
  try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    throw error;
  }
};
  requestData = {
    returnSecureToken: true,
    email: "exampleEmail@gmail.com",
    password: 'testPassword32145!',
    clientType: "CLIENT_TYPE_WEB",
  };

probeApi("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsHk5HLMgukIWVf2XDW0_r2d8EX2UYrIk", requestData)
  .then((data) => console.log("API Data:", data))
  .catch((error) => console.error("API Request Failed:", error));
