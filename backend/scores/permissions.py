from rest_framework import permissions


class IsPlayerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.player == request.user


class IsPlayer(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.player == request.user
