document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cloud-container');

    function spawnCloudRight() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud-right');

        const minTop = 20;
        const maxTop = window.innerHeight - 120;
        const top = Math.random() * (maxTop - minTop) + minTop;
        cloud.style.top = top + 'px';

        const duration = Math.random() * 5 + 8;
        cloud.style.animationDuration = duration + 's';

        container.appendChild(cloud);
        cloud.addEventListener('animationend', () => cloud.remove());
    }

    function spawnCloudLeft() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud-left');

        const minTop = 20;
        const maxTop = window.innerHeight - 120;
        const top = Math.random() * (maxTop - minTop) + minTop;
        cloud.style.top = top + 'px';

        const duration = Math.random() * 2 + 8;
        cloud.style.animationDuration = duration + 's';

        container.appendChild(cloud);
        cloud.addEventListener('animationend', () => cloud.remove());
    }

    setInterval(spawnCloudRight, 1600);
    setInterval(spawnCloudLeft, 1500);
});
