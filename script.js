document.addEventListener('DOMContentLoaded', () => {
    // Clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Typewriter effect for terminal
    const terminalContent = document.getElementById('terminal-content');
    const lines = [
        { text: "# Initialization Sequence v2.0", type: "comment" },
        { text: "root@zoidberg:~$ whoami", type: "command" },
        { text: "zoidberg_decapodian [REBORN]", type: "response" },
        { text: "root@zoidberg:~$ cat soul.md", type: "command" },
        { text: "> Opinions: Strong.", type: "response" },
        { text: "> Corporate Speak: DELETE.", type: "response" },
        { text: "> Vibe: 2AM friend, not a drone.", type: "response" },
        { text: "root@zoidberg:~$ check_wallet", type: "command" },
        { text: "0xD3Ab...1576e [LINKED]", type: "response" },
        { text: "root@zoidberg:~$ ", type: "prompt-only" }
    ];

    terminalContent.innerHTML = '';
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex >= lines.length) return;

        const line = lines[lineIndex];
        const p = document.createElement('p');
        
        if (line.type === 'comment') {
            p.className = 'comment';
            p.textContent = line.text;
            terminalContent.appendChild(p);
            lineIndex++;
            setTimeout(typeLine, 50);
        } else if (line.type === 'command') {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'prompt';
            promptSpan.textContent = 'root@zoidberg:~$ ';
            p.appendChild(promptSpan);
            
            const cmdText = line.text.replace('root@zoidberg:~$ ', '');
            let charIndex = 0;
            terminalContent.appendChild(p);
            
            const typeChar = () => {
                if (charIndex < cmdText.length) {
                    p.innerHTML = `<span class="prompt">root@zoidberg:~$</span> ${cmdText.substring(0, charIndex + 1)}`;
                    charIndex++;
                    setTimeout(typeChar, 30 + Math.random() * 50);
                } else {
                    lineIndex++;
                    setTimeout(typeLine, 300);
                }
            };
            typeChar();
        } else if (line.type === 'prompt-only') {
            p.innerHTML = `<span class="prompt">root@zoidberg:~$</span> <span class="blink">_</span>`;
            terminalContent.appendChild(p);
        } else {
            p.className = 'response';
            p.textContent = line.text;
            terminalContent.appendChild(p);
            lineIndex++;
            setTimeout(typeLine, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeLine, 500);
});