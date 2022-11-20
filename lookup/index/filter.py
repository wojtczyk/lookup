from django.db.models import Q
import django_filters

from .models import Index


class SearchFilter(django_filters.FilterSet):
    q = django_filters.CharFilter(method='custom_search', label='Search')

    class Meta:
        model = Index
        fields = ['q']

    def custom_search(self, queryset, name, value):
        return queryset.filter(
            Q(title__icontains=value) | Q(description__icontains=value) | Q(keywords__icontains=value) | Q(cid__icontains=value)
        )


class IndexFilter(django_filters.FilterSet):
    class Meta:
        model = Index
        fields = ['title', 'description', 'keywords', 'cid']
        order_by = ['title']
