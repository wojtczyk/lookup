from django.shortcuts import render

from .models import Index
from .filter import SearchFilter, IndexFilter

# Create your views here.
def index(request):
    index_list = Index.objects.all()
    filter = SearchFilter(request.GET, queryset=index_list)
    context = {'filter': filter}
    return render(request, 'index/index.html', context)


def create(request):
    index_list = Index.objects.all()
    filter = IndexFilter(request.GET, queryset=index_list)
    context = {'filter': filter}
    return render(request, 'index/create.html', context)


def detail(request, index_id):
    index = Index.objects.get(pk=index_id)
    context = {'index': index}
    return render(request, 'index/detail.html', context)
