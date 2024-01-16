from django.http import HttpRequest
from ninja import Router

router = Router()


@router.get("add/")
def add(request: HttpRequest, a: int, b: int):
    return {"sum": a + b}
