import django_filters

from .models import Index

class IndexFilter(django_filters.FilterSet):
    class Meta:
        model = Index
        fields = ['title', 'description', 'keywords', 'cid']
        order_by = ['title']
