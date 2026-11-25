# Dotdotdot Accessibility Agent Prototype

**Word count of this README:** 200

## Project status
This is an interactive front-end prototype simulating an AI accessibility agent for cooperative multiplayer games. The AI behaviour is simulated using JavaScript rule-based logic. The negotiation panel, transparency feed, and visual feedback are implemented. The 'Intersectional Profiles' feature is planned but not yet developed.

## Technology stack
- HTML5 (Structure)
- CSS3 (Styling and animations)
- Vanilla JavaScript (Simulated AI logic and DOM manipulation)
- No external libraries or frameworks were used.

## Running or inspecting the work
To run the prototype locally:
1. Download or clone this repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge).
3. No dependencies or setup required.

To test the interaction:
- Click the "Try to Solve Puzzle" button on the left screen (Player 1) three times.
- The AI negotiation panel will appear.
- Click "Accept" to see the timer bar adapt and the transparency feed update on the right screen (Player 2).

## Development record
- **Initial setup:** Created the split-screen HTML/CSS layout to simulate two players.
- **Logic implementation:** Wrote JavaScript to count failures and trigger the AI modal after three attempts.
- **Iteration:** Originally, the AI auto-applied help. I changed this to a negotiation panel after reviewing Nielsen's heuristic on user control.
- **AI assistance:** I used ChatGPT to help write the CSS grid layout and debug the JavaScript event listeners. I verified the output by testing the interactions in Chrome and adjusting the logic to ensure the transparency feed updated correctly.

## Additional files
No additional ZIP files are required. All necessary files are in this repository.
