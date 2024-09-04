document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('.slot');
    const loadButton = document.getElementById('load-button');
    const backButton = document.getElementById('back-button');
    let selectedSlot = null;

    // Load saved games from localStorage
    const saves = JSON.parse(localStorage.getItem('chatSaves')) || [];

    // Update slots with saved game information
    function updateSlots() {
        slots.forEach((slot, index) => {
            const slotImage = slot.querySelector('.slot-image');
            const slotDetails = slot.querySelector('.slot-details');

            if (saves[index]) {
                const save = saves[index];
                slotImage.textContent = '';
                slotImage.style.backgroundImage = `url('/api/placeholder/100/100')`;
                slotDetails.innerHTML = `
                    <p>Day ${save.currentDay.replace('day', '')}</p>
                    <p>Saved: ${new Date(save.timestamp).toLocaleString()}</p>
                `;
                slot.classList.remove('empty-slot');
            } else {
                slotImage.textContent = '+';
                slotImage.style.backgroundImage = 'none';
                slotDetails.innerHTML = `
                    <p>Empty Slot</p>
                    <p>Click to save a new game</p>
                `;
                slot.classList.add('empty-slot');
            }
        });
    }

    // Initialize slots
    updateSlots();

    // Handle slot selection
    slots.forEach((slot, index) => {
        slot.addEventListener('click', () => {
            if (selectedSlot) {
                selectedSlot.style.border = '1px solid #ddd';
            }
            slot.style.border = '2px solid #007bff';
            selectedSlot = slot;
            loadButton.disabled = false;

            if (saves[index]) {
                loadButton.textContent = 'Load';
            } else {
                loadButton.textContent = 'New Game';
            }
        });
    });

    // Handle load button click
    loadButton.addEventListener('click', () => {
        const slotIndex = Array.from(slots).indexOf(selectedSlot);
        if (saves[slotIndex]) {
            // Load existing game
            localStorage.setItem('currentSave', JSON.stringify(saves[slotIndex]));
        } else {
            // Start new game
            localStorage.removeItem('currentSave');
        }
        window.location.href = './chat.html';
    });

    // Handle back button click
    backButton.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});