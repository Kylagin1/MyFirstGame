let characterElement;

document.getElementById('startButton').addEventListener('click', () => {
    console.log('Кнопка нажата');
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    characterElement = document.getElementById('character');
    // Устанавливаем начальные координаты
    characterElement.style.position = 'absolute';
    characterElement.style.left = '50%';
    characterElement.style.top = '50%';
    characterElement.style.transform = 'translate(-50%, -50%)';
});

document.addEventListener('keydown', (event) => {
    if (characterElement) {
        const step = 10; // Шаг перемещения в пикселях
        let currentLeft = parseInt(characterElement.style.left) || 0;
        let currentTop = parseInt(characterElement.style.top) || 0;

        switch (event.key) {
            case 'ArrowUp':
                characterElement.style.top = `${currentTop - step}px`;
                break;
            case 'ArrowDown':
                characterElement.style.top = `${currentTop + step}px`;
                break;
            case 'ArrowLeft':
                characterElement.style.left = `${currentLeft - step}px`;
                break;
            case 'ArrowRight':
                characterElement.style.left = `${currentLeft + step}px`;
                break;
        }
    }
});