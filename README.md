Logging Middleware (Frontend)

A reusable logging middleware function to log important frontend events to a central API for observability and debugging.
Usage
```js
import Log from "./log.js";
Log("frontend", "error", "ui", "User submitted empty form.");
