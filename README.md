# CSC105_MiniProject

## To run the frontend and backend in developmode

use

```
    npm run dev
```

# Recipe App

### All of the responses will be wrapped with this data before sending

| Parameter |  Type   | Description              |
| --------- | :-----: | :----------------------- |
| success   | boolean | the status of request    |
| message   | string  | message for each request |

#### URL

`POST /login`

#### Request Body

| Parameter |  Type  | Description |
| --------- | :----: | :---------- |
| email     | string | email       |
| password  | string | password    |

Example

```
    {
        "email": "leklek@gmail.com",
        "password": "123"
    }


```

#### Success

```
    {
        "message": "Login sucessful",
        "userId": xxx,
        "token": "xxxxxx"
    }

```

###### Status Code

` 200` login sucess

**noted: If success the Respond will be sent with cookie named token**

### Register

#### URL

`POST /register`

#### Request Body

| Parameter |  Type  | Description |
| --------- | :----: | :---------- |
| name      | string | name        |
| email     | string | email       |
| password  | string | password    |

Example

```
{
    "name": "123",
    "email": "123@gmail.com",
    "password": "123"
}


```

### Success

    OK

###### Status Code

` 200` register success



### Create New Recipe

#### URL

`POST /create`

#### Request Body

| Parameter    |  Type   | Description |
| ------------ | :-----: | :---------- |
| recipe_name  | string  | name        |
| description  | string  | email       |
| cook_time    |   int   | password    |
| is_favourite | boolean | name        |
| rating       |   int   | email       |
| likes        |   int   | password    |
| Breakfast    | boolean | name        |
| lunch        | boolean | email       |
| Gluten_Free  | boolean | password    |
| Dinner       | boolean | email       |
| image_link   | string  | password    |

Example

```
{
    "recipe_name": "Mock Recipe",
    "description": "TestTest",
    "cook_time": 30,
    "is_favourite": false,
    "rating": 4.5,
    "likes": 10,
    "user_id": 1,
    "Breakfast": true,
    "lunch": false,
    "Gluten_Free": true,
    "Dinner": true,
    "image_link": "https://example.com/image.jpg"
}

```

### Success

```
    {
        "success": true,
        "message": "Recipe created successfully"
    }


```

###### Status Code

` 200` create recipe success




### Edit Recipe

#### URL

`PUT /edit`

#### Request Body

| Parameter    |  Type   | Description |
| ------------ | :-----: | :---------- |
| recipe_name  | string  | name        |
| description  | string  | email       |
| cook_time    |   int   | password    |
| is_favourite | boolean | name        |
| rating       |   int   | email       |
| likes        |   int   | password    |
| Breakfast    | boolean | name        |
| lunch        | boolean | email       |
| Gluten_Free  | boolean | password    |
| Dinner       | boolean | email       |
| image_link   | string  | password    |

Example

```
{
  "recipe_name": "Spaghetti Bolognese",
  "description": "Classic Italian pasta dish with meat sauce",
  "cook_time": 45,
  "is_favourite": false,
  "rating": 4.5,
  "likes": 10,
  "Breakfast": false,
  "lunch": true,
  "Gluten_Free": false,
  "Dinner": true,
  "image_link": "https://example.com/spaghetti_bolognese.jpg"
}


```

### Success

```
    {
        "success": true,
        "message": "Recipe updated successfully"
    }


```

###### Status Code

` 200` edit recipe success



### Delete Recipe

#### URL

`DELETE /delete/recipe_id`


#### Request Body
No Request Body


### Success
```
    {
        "success": true,
        "message": "Recipe deleted successfully"
    }


```

###### Status Code

` 200` success



### Recipes

#### URL

`GET /recipes`


#### Request Body
No Request Body


### Success


###### Status Code

` 200` success

Respnse
|   Parameter   |      Type       | Description |
| ------------- | :-------------: | :---------- |
| no parameter  | Array of recipe | all recipe  |

#### Recipe
the recipe object

| Parameter    |  Type   | Description |
| ------------ | :-----: | :---------- |
| recipe_name  | string  | name        |
| description  | string  | email       |
| cook_time    |   int   | password    |
| is_favourite | boolean | name        |
| rating       |   int   | email       |
| likes        |   int   | password    |
| Breakfast    | boolean | name        |
| lunch        | boolean | email       |
| Gluten_Free  | boolean | password    |
| Dinner       | boolean | email       |
| image_link   | string  | password    |


Example
```
{
  "recipe_name": "Spaghetti Bolognese",
  "description": "Classic Italian pasta dish with meat sauce",
  "cook_time": 45,
  "is_favourite": false,
  "rating": 4.5,
  "likes": 10,
  "Breakfast": false,
  "lunch": true,
  "Gluten_Free": false,
  "Dinner": true,
  "image_link": "https://example.com/spaghetti_bolognese.jpg"
}


```
