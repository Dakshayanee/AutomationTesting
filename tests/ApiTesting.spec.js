const { test, expect } = require('@playwright/test');

var userId;

test("Get users", async ({request}) =>{

    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test("create users", async ({request}) =>{
    //here along with url you need to pass data also
   const response=await request.post('https://reqres.in/api/users',
                       {
                        data:{"name":"Daksh", "job" :"dancer"},
                            headers:{ "Accept":"application/json"}
                       })
        console.log(await response.json())
        expect(response.status()).toBe(201);
        //to get id of the response
        var res=await response.json()
         userId=res.id
       
      })

test.only("update users", async ({request}) =>{
    const response=await request.put('https://reqres.in/api/users/'+userId,
    {
     data:{"name":"Daksh", "job" :"engineer"},
         headers:{ "Accept":"application/json"}
    })
  console.log(await response.json())
  expect(response.status()).toBe(200);
  
})

test("delete users", async ({request}) =>{
    await request.delete('https://reqres.in/api/users/' +userId)
    expect(response.status()).toBe(204);

})