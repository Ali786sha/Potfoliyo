document.addEventListener("DOMContentLoaded", () => {
    // Select buttons
    const downloadCvButton = document.querySelector('.button button:first-child');
    const contactMeButton = document.querySelector('.button button:last-child');

    // Function to handle CV download
    downloadCvButton.addEventListener('click', () => {
        // Replace with the actual CV file path
        const cvUrl = 'path/to/your/CV.pdf'; 
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Alisha_Gouri_CV.pdf'; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Function to handle contact me button click
    contactMeButton.addEventListener('click', () => {
        // Open the contact page or prompt
        window.location.href = '/Contact.html';
    });
});

 