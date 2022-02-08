const test = require('ava');

test.todo('should return correct data from getOrder');
test.todo('should return correct data from getRevenue');
test.todo('should return correct response if failed');

test("api endpoint", async (t) => {
    const { serverURL, axios } = await fixture(t)
    // axios is automatically configured with the base URL of the test server
    const { data: res } = await axios.get("/api/hello")
    t.deepEqual(res, { name: "John Doe" })
  })