document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');
    const puzzleStatus = document.getElementById('puzzle-status');
    const aiPanel = document.getElementById('ai-negotiation-panel');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');
    const teamFeed = document.getElementById('team-feed-list');
    const timerBar = document.getElementById('timer-bar');

    let failureCount = 0;

    function startTimer() {
        timerBar.style.width = '100%';
        timerBar.style.backgroundColor = '#f44336'; 
        setTimeout(() => {
            timerBar.style.width = '10%';
        }, 100);
    }
    startTimer();

    actionBtn.addEventListener('click', () => {
        failureCount++;
        puzzleStatus.textContent = `Failed Attempts: ${failureCount}`;
        
        if (failureCount === 3 && aiPanel.classList.contains('hidden')) {
            triggerAIAgent();
        }
    });

    function triggerAIAgent() {
        setTimeout(() => {
            aiPanel.classList.remove('hidden');
        }, 500);
    }

    acceptBtn.addEventListener('click', () => {
        aiPanel.classList.add('hidden');
        puzzleStatus.textContent = "Solved! (Timer slowed)";
        puzzleStatus.classList.add('adapted');
        actionBtn.disabled = true;
        actionBtn.textContent = "Puzzle Solved";

        timerBar.style.width = '100%';
        timerBar.style.backgroundColor = '#4CAF50';
        timerBar.style.transition = 'width 2s linear, background-color 0.5s';

        broadcastToTeam("Alex accepted an AI adaptation: Puzzle timer slowed by 20% for accessibility.");
    });

    rejectBtn.addEventListener('click', () => {
        aiPanel.classList.add('hidden');
        failureCount = 0;
        puzzleStatus.textContent = "Locked (AI suggestion rejected)";
        broadcastToTeam("Alex declined an AI adaptation suggestion.");
    });

    function broadcastToTeam(message) {
        const li = document.createElement('li');
        li.textContent = message;
        li.style.color = "#f39c12"; 
        teamFeed.appendChild(li);
        teamFeed.parentElement.scrollTop = teamFeed.parentElement.scrollHeight;
    }
});