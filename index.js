const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3000;
const redisPort = process.env.redis_port || 6379;
app.listen(port);
console.log(`Server listening at PORT ${port}`);

// JWT token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.3liebX5UMVR45SEmCYeM2YOTSEFDiDSP4FnUMrpMepU