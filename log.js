async function Log(stack, level, logPackage, message) {
  const logData = {
    stack: stack.toUpperCase(), 
    level: level, 
    pakage: logPackage, 
    msg: message, 

  try {
    const response = await fetch(
      "http://20.244.56.144/evaluation-service/logs",
      {
        method: "POST",
        headers: { },
        body: JSON.stringify(logData), 
      }
    );

    if (!response.ok) {
      console.log("Something went wrong.");
    }
  } catch (err) {
    console.log("Error sending log.");
  }
}
