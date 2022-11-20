from django.shortcuts import render

from .models import Index
from .filter import IndexFilter

# Create your views here.
def index(request):
    # index_list = Index.objects.all().order_by('title')
    # context = {'index_list': index_list}
    # return render(request, 'index/index.html', context)
    index_list = Index.objects.all()
    filter = IndexFilter(request.GET, queryset=index_list)
    context = {'filter': filter}
    return render(request, 'index/index.html', context)


def detail(request, index_id):
    index = Index.objects.get(pk=index_id)
    context = {'index': index}
    return render(request, 'index/detail.html', context)
