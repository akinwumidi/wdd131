document.addEventListener('DOMContentLoaded', function() {
    // Static values for temperature and wind speed
    const temperature = 32; // in Fahrenheit
    const windSpeed = 10; // in mph
  
    // Function to calculate the wind chill factor
    function calculateWindChill(temp, speed) {
      return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * temp * Math.pow(speed, 0.16)
      ).toFixed(2);
    }
  
    // Function to display the wind chill
    function displayWindChill() {
      const windChillElement = document.getElementById('windChill');
      if (temperature <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°F`;
      } else {
        windChillElement.textContent = 'N/A';
      }
    }
  
    // Display the static temperature and wind speed values
    document.getElementById('temperature').textContent = `${temperature}°F`;
    document.getElementById('windSpeed').textContent = `${windSpeed} mph`;
  
    // Call the function to display the wind chill
    displayWindChill();
  
    // Update the current year and last modified date
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearSpan) {
      currentYearSpan.textContent = currentYear;
      console.log(`Current Year: ${currentYear}`);
    } else {
      console.error('Element with id "currentYear" not found.');
    }
  
    const modifySpan = document.getElementById('modify');
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    if (modifySpan) {
      modifySpan.textContent = formattedLastModified;
      console.log(`Last Modified: ${formattedLastModified}`);
    } else {
      console.error('Element with id "modify" not found.');
    }
  });