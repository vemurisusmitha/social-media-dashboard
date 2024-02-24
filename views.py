from django.shortcuts import render

def dashboard(request):
    data = {
        'username': 'John Doe',
        'followers': 1000,
        'platforms': ['Twitter', 'Facebook', 'Instagram'],
        # Add more dynamic data as needed
    }
    return render(request, 'dashboard.html', {'data': data})

