function formatPhoneNumber(phoneNumber) {
  // Validate input
  if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
    return null;
  }

  // Format the phone number
  const areaCode = phoneNumber.slice(0, 3);
  const centralOfficeCode = phoneNumber.slice(3, 6);
  const lineNumber = phoneNumber.slice(6);
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

function formatAndDisplay() {
  const input = document.getElementById("phoneInput").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.className = "result";

  // Process input
  const formatted = formatPhoneNumber(input);
  if (formatted) {
    outputDiv.textContent = `Formatted Number: ${formatted}`;
  } else {
    outputDiv.textContent = "Invalid input! Please enter exactly 10 digits.";
    outputDiv.className = "result error";
  }
}

