from django import forms
from core.models import User


class UserRegisterForm(forms.ModelForm):

    email = forms.EmailField()
    password = forms.PasswordInput()

    class Meta:
        model = User
        fields = ["username", "email", "password"]
