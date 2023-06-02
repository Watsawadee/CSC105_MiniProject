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

` 200` OK

**noted: If success the Respond will be sent with cookie named token**

### Register

#### URL

`POST /register`

#### Request Body

| Parameter |  Type  | Description |
| --------- | :----: | :---------- |
| username  | string | name        |
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

` 200` OK

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
| direction    | string  | step to do  |
| tool         | string  | tool to use |
| ingredient   | string  | ingredient  |
| likes        |   int   | password    |
| user_id      |   int   | id of user  |
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
    "direction": "blablabla",
    "tool": "ABC DEF GHI",
    "ingredient": "dddd uuuu",
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

` 200` OK

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
| direction    | string  | step to do  |
| tool         | string  | tool to use |
| ingredient   | string  | ingredient  |
| likes        |   int   | password    |
| user_id      |   int   | id of user  |
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
  "direction": "blablabla",
  "tool": "ABC DEF GHI",
  "ingredient": "dddd uuuu",
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

` 200` OK

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

` 200` OK

##### Recipes

### Get all recipes

#### URL

`GET /recipes`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

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

### Get specific recipe

#### URL

`GET /recipes/:recipeId`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 0,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

### Get all recipe from specific user

#### URL

`GET /recipes/user/:user_id`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 0,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

### Get favourite recipe from specific user

#### URL

`GET /recipes/Fav/:user_id/`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 0,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

#### Sort Recipe

### Get recipe WHERE Breakfast = 1

#### URL

`GET /sort/breakfast`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 1,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

### Get recipe WHERE Lunch = 1

#### URL

`GET /sort/lunch`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 1,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

### Get recipe WHERE Gluten_Free = 1

#### URL

`GET /sort/gluten`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 1,
      "Lunch": 1,
      "Gluten_Free": 1,
      "Dinner": 0,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```

### Get recipe WHERE Dinner = 1

#### URL

`GET /sort/dinner`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter    |  Type   | Description  |
| ------------ | :-----: | :----------- |
| success      | boolean | status       |
| id           | string  | id of recipe |
| recipe_name  | string  | name         |
| description  | string  | email        |
| cook_time    |   int   | password     |
| is_favourite | boolean | name         |
| rating       |   int   | email        |
| direction    | string  | step to do   |
| tool         | string  | tool to use  |
| ingredient   | string  | ingredient   |
| likes        |   int   | password     |
| user_id      |   int   | id of user   |
| Breakfast    | boolean | name         |
| lunch        | boolean | email        |
| Gluten_Free  | boolean | password     |
| Dinner       | boolean | email        |
| image_link   | string  | password     |
| error        | string  | error        |

Example

```
{
  "success": true,
  "data": [
    {
      "id": 25,
      "recipe_name": "123456",
      "description": "5453",
      "cook_time": 0,
      "is_favourite": 0,
      "rating": 4,
      "direction": "atrmk",
      "tool": "jkgr",
      "ingredient": "jblkjbw",
      "likes": 0,
      "user_id": 12,
      "Breakfast": 1,
      "Lunch": 1,
      "Gluten_Free": 0,
      "Dinner": 1,
      "image_link": "https://assets.epicurious.com/photos/5a7894d5c6aea21096d5582f/1:1/w_3671,h_3671,c_limit/Filipino-Cure-for-the-Common-Cold-31012018.jpg"
    }
  ],
  "error": null
}

```



#### User


### Get all user

#### URL

`GET /user`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter |  Type  | Description |
| --------- | :----: | :---------- |
| id        |  int   | id of user  |
| name      | string | name        |
| email     | string | email       |
| password  | string | password    |

Example

```
{
  "id": 5,
  "name": "Johny",
  "email": "johny@example.com",
  "password": "$2b$10$IGkdoSRMikhFu50SBL9F5.fs92f7kIWVdjZboaloolJdBa25h3mza"
},
{
  "id": 8,
  "name": "Nanon",
  "email": "nanon@gmail.com",
  "password": "$2b$10$8gsRSdMAMsom897M7HA1FudIm9UlSqhCzWTET/SL3VlWLdfrkJXLu"
}

```



### Get specific user

#### URL

`GET /user/:user_id`

#### Request Body

No Request Body

### Success

###### Status Code

` 200` OK

Respnse
| Parameter | Type | Description |
| ------------- | :-------------: | :---------- |
| no parameter | Array of recipe | all recipe |

#### Recipe

the recipe object

| Parameter |  Type  | Description |
| --------- | :----: | :---------- |
| id        |  int   | id of user  |
| name      | string | name        |
| email     | string | email       |
| password  | string | password    |

Example

```
{
  "id": 12,
  "name": "phing",
  "email": "phing@gmail.com",
  "password": "$2b$10$Vp8/S6A70Vw3/90OJt7TPeTH/g8MEaYWD4BAswqmYS9g5WyZWTHkS"
}

```

