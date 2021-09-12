const password = prompt("Please Enter a Password To Check");

// Password must be atleast 6 characters.
if (password.length >= 6) {
  // Password must not include space.
  if (password.indexOf(" ") === -1) {
    console.log("VALID PASSWORD");
  } else {
    console.log("PASSWORD CANNOT CONTAIN SPACES!");
  }
} else {
  console.log("PASSWORD TO SHORT! Must be 6+ characters");
}
