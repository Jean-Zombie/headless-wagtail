from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail_headless_preview.models import HeadlessPreviewMixin
from wagtail.images.api.fields import ImageRenditionField
from wagtail.images.edit_handlers import ImageChooserPanel


class NewsPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)
    image = models.ForeignKey(
        "wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL
    )

    content_panels = Page.content_panels + [
        FieldPanel("date"),
        FieldPanel("intro"),
        ImageChooserPanel("image"),
        FieldPanel("body", classname="full"),
    ]

    api_fields = [
        APIField("date"),
        APIField("intro"),
        APIField("body"),
        APIField(
            "image_thumbnail",
            serializer=ImageRenditionField("fill-100x100", source="image"),
        ),
    ]

class MyWonderfulPage(HeadlessPreviewMixin, NewsPage):
    pass
