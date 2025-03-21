// Function to fetch and display markdown files and their titles
async function loadMarkdownFiles() {
    const markdownListDiv = document.getElementById('markdown-list');
    
    // Fetch the markdown files from the folder (replace with your server logic)
    const response = await fetch('Posts'); // server-side endpoint
    const files = await response.json();

    // Loop through each file and display it
    files.forEach(file => {
        const fileTitle = file.replace('.md', ''); // Remove extension for the title
        const fileDiv = document.createElement('div');
        
        const title = document.createElement('h2');
        title.textContent = fileTitle;
        fileDiv.appendChild(title);
        
        // Load and convert markdown content to HTML
        fetch(`Posts/${file}`)
            .then(res => res.text())
            .then(mdContent => {
                const htmlContent = marked(mdContent);
                fileDiv.innerHTML += htmlContent;
            });

        markdownListDiv.appendChild(fileDiv);
    });
}

// Load the markdown files when the page loads
window.onload = loadMarkdownFiles;