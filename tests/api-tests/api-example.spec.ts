import { test, expect } from '../baseTest'
import { GetUserResponse, GetAllUsersResponse } from '../../api/models/UserInterface'
import { GetAllProductsResponse, GetProductResponse } from '../../api/models/ProductsInterface'

test.describe("Users api tests",() => {

  test("get all users", async ({apiManager}) => {

    const response = await apiManager.users.getAllUsers()
    const allUsersBody = await response.json() as GetAllUsersResponse

    const getSelectedUser = allUsersBody.data.find(user => user.username == "priya.rossi1")
    expect(getSelectedUser?.firstName).toBe("Priya")
    expect(getSelectedUser?.lastName).toBe("Rossi")
    expect(getSelectedUser?.email).toBe("priya.rossi@qalabs.dev") 
  })

  test("get current users", async ({apiManager}) => {

    const response = await apiManager.users.getUser(2)
    const userBody = await response.json() as GetUserResponse
    
    expect(userBody.data.username).toBe("ethan.andersson2")
    expect(userBody.data.firstName).toBe("Ethan")
    expect(userBody.data.lastName).toBe("Andersson")
    expect(userBody.data.status).toBe("suspended")
  })

  test("post user", async ({apiManager}) => {

      const postData = {
          "firstName": "Ayhan",
          "lastName": "Nazif",
          "email": "aycho@qalabs.dev",
          "role": "QA Engineer"
      }

    const response = await apiManager.users.postUser(postData)
    const userBody = await response.json() as GetUserResponse
    
    expect(userBody.data.firstName).toBe(postData.firstName)
    expect(userBody.data.lastName).toBe(postData.lastName)
    expect(userBody.data.email).toBe(postData.email)
    expect(userBody.data.role).toBe(postData.role)
  })

  test("put user", async ({apiManager}) => {

      const putData = {
          "firstName": "Ayhan",
          "lastName": "Nazif",
          "email": "aycho@qalabs.dev",
          "role": "Developer"
      }

    const response = await apiManager.users.putUser(1, putData)
    const userBody = await response.json() as GetUserResponse
    
    expect(userBody.data.firstName).toBe(putData.firstName)
    expect(userBody.data.lastName).toBe(putData.lastName)
    expect(userBody.data.email).toBe(putData.email)
    expect(userBody.data.role).toBe(putData.role)
  })

  test("patch user", async ({apiManager}) => {

      const patchData = {
          "role": "DevOps"
      }

    const response = await apiManager.users.patchUser(1, patchData)
    const userBody = await response.json() as GetUserResponse
    
    expect(userBody.data.role).toBe(patchData.role)
  })

  test("delete user", async ({apiManager}) => {

    const response = await apiManager.users.deleteUser(1)
    const body = await response.text()
    await expect(response).toBeOK()
    expect(body).toBe("")
  })  
})

test.describe("Products api tests", () => {

  test("get all products", async ({apiManager}) => {

    const response = await apiManager.products.getAllProducts()
    const allProductsBody = await response.json() as GetAllProductsResponse

    const getSelectedProduct = allProductsBody.data.find(product => product.name == "Quantum SSD 1TB B")
    expect(getSelectedProduct?.category).toBe("Audio")
    expect(getSelectedProduct?.price).toBe(119.91)
    expect(getSelectedProduct?.stock).toBe(363) 
    expect(getSelectedProduct?.status).toBe("active") 
  })

    test("get selected product", async ({apiManager}) => {

    const response = await apiManager.products.getProduct(2)
    const body = await response.json() as GetProductResponse

    expect(body.data.name).toBe("Comet Power Bank C")
    expect(body.data.category).toBe("Accessories")
    expect(body.data.price).toBe(527.14)
    expect(body.data.stock).toBe(155) 
    expect(body.data.status).toBe("out_of_stock") 
  })

  test("post product", async ({apiManager}) => {

    const postData = {
      "name": "Nebula Keyboard",
      "price": 129.99,
      "category": "Peripherals",
      "stock": 40
    }

    const response = await apiManager.products.postProduct(postData)
    const body = await response.json() as GetProductResponse

    expect(body.data.name).toBe(postData.name)
    expect(body.data.category).toBe(postData.category)
    expect(body.data.price).toBe(postData.price)
    expect(body.data.stock).toBe(postData.stock) 
  })

  test("put selected product", async ({apiManager}) => {

    const putData = {
      "name": "Nebula Keyboard",
      "price": 50,
      "category": "Peripherals",
      "stock": 5
    }

    const response = await apiManager.products.putProduct(1, putData)
    const body = await response.json() as GetProductResponse

    expect(body.data.name).toBe(putData.name)
    expect(body.data.category).toBe(putData.category)
    expect(body.data?.price).toBe(putData.price)
    expect(body.data?.stock).toBe(putData.stock) 
  })

  test("patch selected product", async ({apiManager}) => {

    const patchData = {
      "category": "Audio"
    }

    const response = await apiManager.products.patchProduct(1, patchData)
    const body = await response.json() as GetProductResponse

    expect(body.data.category).toBe(patchData.category)
  })

  test("delete selected product", async ({apiManager}) => {

    const response = await apiManager.products.deleteProduct(1)
    const body = await response.text()

    expect(response.status()).toBe(204)
    expect(body).toBe("")
  })
})