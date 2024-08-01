# utils/email_utils.py
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from schemas import CommandInfo

def send_email(command_info: CommandInfo):
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'adjissifatimaamina@gmail.com'
    smtp_pass = 'ltds owub ybol pwne'
    sender_email = smtp_user
    receiver_email = 'adjissifatimaamina@gmail.com'

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'New Form Submission'

    email_body = f"""
    New Form Submission:
    Name: {command_info.username}
    Email: {command_info.useremail}
     
    Product Info:
    Title: {command_info.titleproduct}
    Command Type: {command_info.typecommand}
    Price: {command_info.priceproduct}
    Category: {command_info.productcategory}
    Message: {command_info.message}
    """

    message.attach(MIMEText(email_body, 'plain'))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(sender_email, receiver_email, message.as_string())
