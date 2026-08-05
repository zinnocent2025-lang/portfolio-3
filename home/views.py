from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        full_message = f"""
Name: {name}
Email: {email}
Phone: {phone}

Message:
{message}
"""

        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        return redirect('home')

    return render(request, 'home/index.html')