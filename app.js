// Отримати список користувачів з GitHub API Опис: Використайте публічне
// API GitHub для отримання списку користувачів. Зробіть GET-запит за
// адресою https://api.github.com/users та перегляньте отримані дані щодо
// користувачів.

function createListUsers(data) {
    const usersList = document.querySelector(".users__list");
    const htmlElement = data.map(user => {
        const elementOfLi = `
        <li class="users__item">
        <div>
            <h2 class="users__nickname">${user.login}</h2>
            <p class="users__node-id">Node-ID - ${user.node_id}</p>
            <img class="users__picture" src="${user.avatar_url}" alt="picture">
        </div>
        </li>
        `
        return elementOfLi
    })
    const htmlElementString = htmlElement.join('')
    usersList.innerHTML = htmlElementString
}

function getUsersAPI() {
    return fetch("https://api.github.com/users")
}

getUsersAPI().then((result) => result.json()).then((resultdata) => createListUsers(resultdata))

