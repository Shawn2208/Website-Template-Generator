// Add an event listener to the form with the id "templateForm" when it's submitted
document.getElementById("templateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get values from input fields
    let headerColor = document.getElementById("headerColor").value;
    let contentColor = document.getElementById("contentColor").value;
    let numSections = parseInt(document.getElementById("numSections").value);
    let numBoxes = parseInt(document.getElementById("numBoxes").value);
    let numNavLinks = parseInt(document.getElementById("numNavLinks").value);
  
    // Generate navigation links HTML
    let navLinks = '';
    // for loop
    for (let i = 1; i <= numNavLinks; i++) {
      navLinks += `<li style="margin-right: 10px;"><a href="#" style="color: #fff; text-decoration: none; font-size: 20px;">Link ${i}</a></li>`;
    }
  
    // Generate sections HTML
    let sections = '';
    for (let i = 1; i <= numSections; i++) {
      sections += `
        <section style="margin-bottom: 40px; text-align: center;">
          <h2 style="color: #333; font-family: 'Arial', sans-serif;">Section ${i}</h2>
          <p style="color: #555; font-family: 'Arial', sans-serif;">Content of section ${i} goes here.</p>
        </section>
      `;
    }
  
    // Generate boxes HTML
    let boxes = '';
    for (let i = 1; i <= numBoxes; i++) {
      boxes += `
        <div style="background-color: #f9f9f9; padding: 20px; text-align: center;">
          <h3>Box ${i}</h3>
        </div>
      `;
    }
  
    // Generate the final template HTML using the provided values
    let template = `
      <header style="background-color: ${headerColor}; padding: 20px;">
        <h1 style="color: #fff; text-align: center; font-family: 'Arial', sans-serif;">Website Title</h1>
        <nav>
          <ul style="list-style: none; display: flex; justify-content: center; padding: 0;">
            ${navLinks}
          </ul>
        </nav>
      </header>
      <main style="background-color: ${contentColor}; padding: 40px;">
        ${sections}
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 20px;">
          ${boxes}
        </div>
      </main>
      <footer style="background-color: #f1f1f1; padding: 20px; text-align: center;">
        <p style="color: #777; font-family: 'Arial', sans-serif;">&copy; ${new Date().getFullYear()} Your Website</p>
      </footer>
    `;
  
    // Create a download link for the template
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(template));
    downloadLink.setAttribute("download", "template.html");
    downloadLink.style.display = "none";
  
    // Append the download link to the document body
    document.body.appendChild(downloadLink);
  
    // Trigger the click event on the download link
    downloadLink.click();
  
    // Remove the download link from the document body
    document.body.removeChild(downloadLink);
  });
  