const welcomeText = [
    'Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-81-generic x86_64)',
    '',
    ' * Documentation:  https://help.ubuntu.com',
    ' * Management:     https://landscape.canonical.com',
    ' * Support:        https://ubuntu.com/advantage',
    '',
    'System information as of ' + new Date(),
    '',
    'System load:  0.08               Processes:             120',
    'Usage of /:   34.7% of 98.78GB   Users logged in:       1',
    'Memory usage: 64%                IPv4 address for ens33: 192.168.1.10',
    '',
    '65477 updates can be installed immediately.',
    '1 of these updates are security updates.'
];

const outputElement = document.getElementById('output');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeTextWithDelay(text, delay) {
    for (let i = 0; i < text.length; i++) {
        outputElement.innerHTML += text.charAt(i);
        outputElement.scrollTop = outputElement.scrollHeight;
        await sleep(delay);
    }
}

async function simulateTerminal() {
    async function displayWelcomeText() {
        await sleep(1000);
        outputElement.innerHTML += welcomeText.join('<br>') + '<br>$ ';
        outputElement.scrollTop = outputElement.scrollHeight;
        await sleep(2000);
    }
    let currentIndex = 0;

    async function runShell() {
        await typeTextWithDelay('wget thetwoboom.xyz', 100);
        outputElement.innerHTML += '\n';
        await sleep(1000);
        outputElement.innerHTML += 'Connecting to thetwoboom.xyz (192.124.249.19:80)... connected.<br>';
        await sleep(80);
        outputElement.innerHTML += 'HTTP request sent, awaiting response... 200 OK<br>';
        await sleep(80);
        outputElement.innerHTML += 'Length: unspecified [text/html]<br>';
        await sleep(80);
        outputElement.innerHTML += 'Saving to: ‘index.html’<br>';
        await sleep(80);
        outputElement.innerHTML += '<br>';
        await sleep(80);
        outputElement.innerHTML += 'index.html                     100%[==================================================>]   2.42K  --.-KB/s    in 0s<br>';
        outputElement.scrollTop = outputElement.scrollHeight;
        await sleep(80);
        outputElement.innerHTML += '<br>';
        await sleep(80);
        outputElement.innerHTML += '2023-11-22 15:07:15 (23,7 MB/s) - ‘index.html’ saved [2477]<br>';
        outputElement.scrollTop = outputElement.scrollHeight;
        await sleep(80);
        outputElement.innerHTML += '<br>$ ';
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    await displayWelcomeText();
    await runShell();
    document.body.style.opacity = 0;
    await sleep(1000);
    window.location.href = 'https://thetwoboom.xyz';
}

simulateTerminal();


