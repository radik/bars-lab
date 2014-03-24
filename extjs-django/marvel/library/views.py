from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from models import Book, Author, Genre
from serializers import UserSerializer, GroupSerializer, BookSerializer, AuthorSerializer, GenreSerializer


class UserViewSet(viewsets.ModelViewSet):

    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):

    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class BookViewSet(viewsets.ModelViewSet):

    """
    API endpoint that allows books to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class GenreViewSet(viewsets.ModelViewSet):

    """
    API endpoint that allows genres to be viewed or edited.
    """
    queryset = Genre.objects.all()
    serializer_class = GroupSerializer


class AuthorViewSet(viewsets.ModelViewSet):

    """
    API endpoint that allows authors to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
