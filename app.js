// Отримати список користувачів з GitHub API Опис: Використайте публічне
// API GitHub для отримання списку користувачів. Зробіть GET-запит за
// адресою https://api.github.com/users та перегляньте отримані дані щодо
// користувачів.

function getUsersAPI() {
    return fetch("https://api.github.com/users")
}

getUsersAPI().then((result) => result.json()).then((resultdata) => console.log(resultdata))

