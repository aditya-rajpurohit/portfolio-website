const themeToggle = document.getElementById('theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        // Dark mode
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';

        // Change heading
        const heading = document.querySelector('h1');
        if (heading) heading.style.color = '#ffffff';

        // Change paragraphs but exclude footer links
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            if (!p.closest('footer')) {
                p.style.color = '#ffffff';
            }
        });

        // Keep footer links grey
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            link.style.color = 'grey';
        });

        const footerTexts = document.querySelectorAll('footer p');
        footerTexts.forEach(text => {
            text.style.color = 'grey';
        });

        // Dark toggle button
        themeToggle.style.backgroundColor = '#374151';
        themeToggle.style.color = '#ffffff';

        // Show sun icon (we're in dark mode, so show sun to go back to light)
        themeToggle.innerHTML = `
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
        `;

    } else {
        // Light mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';

        // Reset heading
        const heading = document.querySelector('h1');
        if (heading) heading.style.color = '#000000';


        // Reset paragraphs but exclude footer links
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            if (!p.closest('footer')) {
                p.style.color = '#374151';
            }
        });

        // Keep footer links grey in light mode too
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            link.style.color = 'grey';
        });

        const footerTexts = document.querySelectorAll('footer p');
        footerTexts.forEach(text => {
            text.style.color = 'grey';
        });

        // Light toggle button
        themeToggle.style.backgroundColor = '#f3f4f6';
        themeToggle.style.color = '#000000';

        // Show moon icon (we're in light mode, so show moon to go to dark)
        themeToggle.innerHTML = `
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
        `;
    }
});