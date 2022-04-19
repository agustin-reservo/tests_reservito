from django.shortcuts import render
from django.views.generic import FormView
from django.urls import reverse_lazy

from core.forms import UserRegisterForm


class UserRegisterView(FormView):

    form_class = UserRegisterForm
    success_url = reverse_lazy("core:schedule")
    template_name = "registration/registration_error.html"

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

def ver_agenda(request):
    context = {}
    return render(request, 'core/schedule.html', context)
