from fastapi import FastAPI


car_app = FastAPI()


@car_app.get('/')
def get_home() -> str:
    return 'Hello World'


@car_app.get('/cars')
def get_cars() -> dict:
    return {'model': 'B-Max', 'Constructeur': 'Ford', 'Annee': '2014'}
