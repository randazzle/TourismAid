from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title','slug','body','body1','body2','date','thumb','img1','img2')