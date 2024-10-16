document.getElementById('load-users').addEventListener('click', async () => {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Falha ao carregar usuários');
        }

        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = ${user.name} - ${user.email};
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro:', error);
        userList.innerHTML = '<li>Erro ao carregar usuários</li>';
    }
});