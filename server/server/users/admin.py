from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from users.models import CustomUser


class UserInline(admin.StackedInline):
    model = CustomUser
    can_delete = True


class UserAdmin(BaseUserAdmin):
    inlines = (UserInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
