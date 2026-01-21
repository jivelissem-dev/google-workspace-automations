function sendAutoEmail() {
  GmailApp.sendEmail(
    "test@email.com",
    "Automation Test",
    "This email was sent automatically using Google Apps Script."
  );
}
