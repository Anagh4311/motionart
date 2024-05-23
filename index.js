document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');

    // Function to move the cursor
    const moveCursor = (event) => {
        gsap.to(cursor, {
            duration: 0.2,
            x: event.clientX,
            y: event.clientY
        });
    };

    // Event listener for mouse movement
    document.addEventListener('mousemove', moveCursor);
});
