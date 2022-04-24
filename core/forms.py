from django import forms
from core.models import User


class UserRegisterForm(forms.ModelForm):

    email = forms.EmailField()
    password = forms.PasswordInput()
    password_dos_confirmar=forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ["username", "email", "password"]



    def clean(self):
        super_data = super(UserRegisterForm, self).clean()
        password = super_data.get("password")
        password_dos_confirmar = super_data.get("password_dos_confirmar")

        if password != password_dos_confirmar:
            raise forms.ValidationError(
                {"password": "Las contraseñas son diferentes"}
            )

        return super_data