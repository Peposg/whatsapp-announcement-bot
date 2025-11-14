import imaplib
import email
from email.header import decode_header

# Connect to the Gmail IMAP server
imap = imaplib.IMAP4_SSL("imap.gmail.com")

# Login (use app password if Gmail 2-factor authentication is enabled)
email_user = "" #email id
email_pass = "" #password or app-password
imap.login(email_user, email_pass)

# Select your inbox
status, messages = imap.select("INBOX")

# Get message IDs of all emails
status, msg_nums = imap.search(None, "ALL")
msg_list = msg_nums[0].split()

# Let's just look at the latest email
latest_email_id = msg_list[-1]
status, msg_data = imap.fetch(latest_email_id, "(RFC822)")
raw_email = msg_data[0][1]
msg = email.message_from_bytes(raw_email)

# Print the email subject and sender
subject, encoding = decode_header(msg["Subject"])[0]
if isinstance(subject, bytes):
    subject = subject.decode(encoding if encoding else "utf-8")
print("Subject:", subject)
print("From:", msg["From"])

# Log out
imap.logout()
