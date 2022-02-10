import fixture from "nextjs-ava-fixture"
import test from "ava"

// These tests use hard-coded magic numbers, would prefer to mock the data points where the API gets it from, but would require more time to learn AVA and next.js.
// Would also like to test if it returns the correct json structure - but for now just copy pasting the data from the data.js file and comparing if the API can get the 
// same value as they would then be both using the same data.
// e.g.
// 1. Mock API
// 2. Mock some return value
// 3. Use this value as the same assert to ensure the value coming out is the same as the mocked value
test("should return correct order", async (t) => {
    const { axios } = await fixture(t)
    const { data: res } = await axios.get("/api/getOrders")
    t.deepEqual(res, 
      {
        "orders": [
          {
            "nsw": 45,
            "qld": 20,
            "vic": 12
          }
        ]
      }  
    )
})

test.serial("should return correct revenue", async (t) => {
  const { axios } = await fixture(t)
  const { data: res } = await axios.get("/api/getRevenue")
  t.deepEqual(res, 
      {
        "revenueThisWeek": {
          "labels": [
            "11/12",
            "12/12",
            "13/12",
            "14/12"
          ],
          "datasets": [
            {
              "data": [
                8459,
                12924,
                10926,
                9652
              ],
              "borderColor": "#f58120",
              "backgroundColor": "#f58120"
            }
          ]
        }
      }
    )
})

// Would like to mock a server to force it to return a 500 but insufficient knowledge
test.todo("should test an error response, i.e. incorrect login or request so gives 500 error but hard to simulate as grabbing data directly from file")