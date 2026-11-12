import { test, expect } from '../baseTest'
import { GetUserResponse, GetAllUsersResponse } from '../../api/models/UserInterface'
import { GetAllProductsResponse, GetProductResponse } from '../../api/models/ProductsInterface'
import { GetAllOrdersResponse, GetOrderResponse } from '../../api/models/OrdersInterface'
 
test.describe("Users api tests",() => {

  test("get all users", async ({apiManager}) => {

    const response = await apiManager.users.getAllUsers()
    const allUsersBody = await response.json() as GetAllUsersResponse

    const getSelectedUser = allUsersBody.data.find(user => user.username == "priya.rossi1")
    expect(getSelectedUser?.firstName).toBe("Priya")
    expect(getSelectedUser?.lastName).toBe("Rossi")
    expect(getSelectedUser?.email).toBe("priya.rossi@qalabs.dev") 
  })

  test("get selected users", async ({apiManager}) => {

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

  test("put selected user", async ({apiManager}) => {

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

  test("patch selected user", async ({apiManager}) => {

    const patchData = {
      "role": "DevOps"
    }

    const response = await apiManager.users.patchUser(1, patchData)
    const userBody = await response.json() as GetUserResponse
    
    expect(userBody.data.role).toBe(patchData.role)
  })

  test("delete selected user", async ({apiManager}) => {

    const response = await apiManager.users.deleteUser(1)
    const body = await response.text()
    await expect(response.status()).toBe(204)
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

test.describe("Orders api tests",() => {

  test("get all orders", async ({apiManager}) => {

    const response = await apiManager.orders.getAllOrders()
    const allOrdersBody = await response.json() as GetAllOrdersResponse

    const getSelectedOrder = allOrdersBody.data.find(order => order.orderNumber == "ORD-2026-00001")
    expect(getSelectedOrder?.customerId).toBe(17)
    expect(getSelectedOrder?.status).toBe("paid")
    expect(getSelectedOrder?.total).toBe(1079.64) 
    const getItemFromSelectedOrder =  getSelectedOrder?.items.find(item => item.productId == 31)
    expect(getItemFromSelectedOrder?.unitPrice).toBe(149.58)
    expect(getItemFromSelectedOrder?.quantity).toBe(3)
  })

  test("get selected order", async ({apiManager}) => {

    const response = await apiManager.orders.getOrder(2)
    const orderBody = await response.json() as GetOrderResponse
    
    expect(orderBody.data.orderNumber).toBe("ORD-2026-00002")
    expect(orderBody.data.customerId).toBe(27)
    expect(orderBody.data.status).toBe("delivered")
    const getItemFromSelectedOrder =  orderBody.data.items.find(item => item.productId == 24)
    expect(getItemFromSelectedOrder?.unitPrice).toBe(200.33)
    expect(getItemFromSelectedOrder?.quantity).toBe(2)
  })

  test("post order", async ({apiManager}) => {

    const postData = {
      "customerId": 7,
      "items": [
        {
          "productId": 3,
          "quantity": 2
        }
      ],
      "currency": "USD"
    }

    const response = await apiManager.orders.postOrder(postData)
    const orderBody = await response.json() as GetOrderResponse
    
    expect(orderBody.data.customerId).toBe(postData.customerId)
    expect(orderBody.data.currency).toBe(postData.currency)
    expect(orderBody.data.items[0].productId).toBe(postData.items[0].productId)
    expect(orderBody.data.items[0].quantity).toBe(postData.items[0].quantity)
  })

  test("put selected order", async ({apiManager}) => {

    const putData = {
      "customerId": 7,
      "items": [
        {
          "productId": 10,
          "quantity": 6
        }
      ],
      "currency": "EUR"
    }

    const response = await apiManager.orders.putOrder(1, putData)
    const orderBody = await response.json() as GetOrderResponse
    
    expect(orderBody.data.customerId).toBe(putData.customerId)
    expect(orderBody.data.currency).toBe(putData.currency)
    expect(orderBody.data.items[0].productId).toBe(putData.items[0].productId)
    expect(orderBody.data.items[0].quantity).toBe(putData.items[0].quantity)
  })

  test("patch selected order", async ({apiManager}) => {

    const patchData = {
      "status": "active"
    }

    const response = await apiManager.orders.patchOrder(1, patchData)
    const orderBody = await response.json() as GetOrderResponse
    
    expect(orderBody.data.status).toBe(patchData.status)
  })

  test("delete selected order", async ({apiManager}) => {

    const response = await apiManager.orders.deleteOrder(1)
    const body = await response.text()
    expect(response.status()).toBe(204)
    expect(body).toBe("")
  })  
})